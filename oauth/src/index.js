"use strict";

var bodyParser = require("body-parser");

var crypto = require("crypto");

var express = require("express");

var moment = require('moment');

var _require = require('../shadow/jwt.js'),
    private_key = _require.private_key;

var jwt = require('jsonwebtoken');

var uuid = require('uuid');

var user = {
  userName: "root",
  id: "b5bb20650eece726645891c81b9e9618",
  role: "admin",
  passwordHashed: "6f9d132c4e31758c52fe8d4a53024b730f437023bfbeb44f4106b2e386de8431abf21cb9f9be7dea86bbf7b54968a02dc31b2c194a5f705748af52d969678c46",
  salt: "aa74a24d8dca1d927f9eafd9bb237ba5cc4f2b1a28eceb21f8b5657a71bd8d5c5e612c35aec15011f5b5dfca031cab2b563711dad243bb4dc28eceb95e067f27d773378657feaca25f8606c131b5a330b517292801b4ba68ac571c8182149e82b63179d456ad2b10eb062e96b9edc3ae774316fdd3375162e5cdb9c8254b47b9",
  sessions: new Map()
};
var app = express();
var port = 34219;
var RefreshTokenLifeTimeMs = 7 * 24 * 60 * 60 * 1000; //const RefreshTokenLifeTimeMs = 60000;

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.all("*", function (req, res, next) {
  console.log(req.method + " " + req.url + " has been invoked!");
  next();
});
app.listen(port, '0.0.0.0', function () {
  console.log("server started at http://localhost:".concat(port));
  setInterval(function () {
    console.log(user.sessions.size);
  }, 5000);
});

function hash(password, salt) {
  var hash = crypto.createHmac('sha512', salt);
  hash.update(password);
  var value = hash.digest('hex');
  return {
    salt: salt,
    hash: value
  };
}

function createTokens(id, role) {
  var access_token = jwt.sign({
    id: id,
    role: role
  }, private_key, {
    algorithm: "HS512",
    expiresIn: '600s'
  });
  var refresh_token = crypto.randomBytes(32).toString("hex");
  return {
    access_token: access_token,
    refresh_token: refresh_token
  };
}

app.post("/login", function (request, response) {
  var userName = request.body.userName;
  var password = request.body.password;
  if (!userName || !password) return response.status(500).send("nope");

  if (typeof userName === 'string' && typeof password === 'string' && emailCompair(user.userName, userName)) {
    if (hash(password, user.salt).hash === user.passwordHashed) {
      var tokens = createTokens(user.id, user.role);
      var key = uuid.v1();
      user.sessions.set(key, {
        refresh_token: tokens.refresh_token,
        selfDestruct: setTimeout(function () {
          user.sessions.delete(key);
        }, RefreshTokenLifeTimeMs)
      });
      response.send(tokens);
      return user;
    }

    response.status(500).send("nope");
    return user;
  }

  response.status(500).send("nope");
  return user;
});
app.post("/refresh", function (request, response) {
  var refreshToken = request.body.refresh_token;
  var userName = request.body.userName;
  if (!refreshToken || !userName) return response.status(500).send("nope");

  if (typeof refreshToken === 'string' && typeof userName === 'string' && emailCompair(user.userName, userName)) {
    var invalid = true;
    var guid = null;
    user.sessions.forEach(function (session, key) {
      if (session.refresh_token === refreshToken) {
        invalid = false;
        guid = key;
      }
    });

    if (!invalid) {
      var tokens = createTokens(user.id, user.role);
      user.sessions.set(guid, {
        refresh_token: tokens.refresh_token,
        selfDestruct: setTimeout(function () {
          user.sessions.delete(guid);
        }, RefreshTokenLifeTimeMs)
      });
      response.send(tokens);
      return user;
    }

    response.status(500).send("nope");
    return user;
  }

  response.status(500).send("nope");
  return user;
});
app.post("/validate", function (request, response) {
  var accessToken = request.body.access_token;
  if (!accessToken) return response.send("nope");

  try {
    jwt.verify(accessToken, private_key, {
      algorithm: "HS512",
      expiresIn: '600s'
    });
    response.send("good job");
  } catch (error) {
    response.send("nope");
  }
});

function emailCompair(email1, email2) {
  var e1 = email1.trim();
  var e2 = email2.trim();
  return e1.toLocaleLowerCase() === e2.toLocaleLowerCase();
}