"use strict";

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _crypto = _interopRequireDefault(require("crypto"));

var _express = _interopRequireDefault(require("express"));

var _users = require("../shadow/users.js");

var _jwt = require("../shadow/jwt.js");

var jwt = _interopRequireWildcard(require("jsonwebtoken"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const port = 8080;
app.use(_bodyParser.default.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.all("*", (req, res, next) => {
  console.log(req.method + " " + req.url + " has been invoked!");
  next();
});
app.listen(port, '0.0.0.0', () => {
  console.log(`server started at http://localhost:${port}`);
});

function hash(password, salt) {
  var hash = _crypto.default.createHmac('sha512', salt);

  hash.update(password);
  var value = hash.digest('hex');
  return {
    salt: salt,
    hash: value
  };
}

function createTokens(id, role) {
  console.log(_jwt.private_key);
  const access_token = jwt.sign({
    id,
    role
  }, _jwt.private_key, {
    algorithm: "HS512"
  });

  const refresh_token = _crypto.default.randomBytes(32).toString("hex");

  return {
    access_token,
    refresh_token
  };
}

app.post("/login", (request, response) => {
  console.log(request.body);
  const userName = request.body.userName;
  const password = request.body.password;
  _users.users = (_users.users.map(user => {
    if (emailCompair(request.body.userName, userName)) {
      if (hash(password, user.salt).hash === user.passwordHashed) {
        const tokens = createTokens(user.id, user.role);
        user.refresh_token = tokens.refresh_token;
        response.send(tokens);
        return user;
      }

      response.status(500).send("nope");
      return user;
    }

    response.status(500).send("nope");
    return user;
  }), function () {
    throw new Error('"' + "users" + '" is read-only.');
  }());
  response.status(500).send("nope");
  return user;
});
app.post("/refresh", (request, response) => {
  const refreshToken = request.body.refresh_token;
  const userName = request.body.userName;
  _users.users = (_users.users.map(user => {
    if (emailCompair(request.body.userName, userName)) {
      if (user.refresh_token === refreshToken) {
        const tokens = createTokens(user.id, user.role);
        user.refresh_token = tokens.refresh_token;
        response.send(tokens);
        return user;
      }

      response.status(500).send("nope");
      return user;
    }

    response.status(500).send("nope");
    return user;
  }), function () {
    throw new Error('"' + "users" + '" is read-only.');
  }());
  response.status(500).send("nope");
  return user;
});

function emailCompair(email1, email2) {
  const e1 = email1.trim();
  const e2 = email2.trim();
  return e1.toLocaleLowerCase() === e2.toLocaleLowerCase();
}