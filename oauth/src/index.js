import bodyParser from "body-parser";
import crypto from "crypto";
import express from "express";
import moment from 'moment';

import { private_key } from '../shadow/jwt.js';
import * as jwt from 'jsonwebtoken';
import * as uuid from 'uuid';

let user = {
    userName: "root",
    id: "b5bb20650eece726645891c81b9e9618",
    role: "admin",
    passwordHashed: "6f9d132c4e31758c52fe8d4a53024b730f437023bfbeb44f4106b2e386de8431abf21cb9f9be7dea86bbf7b54968a02dc31b2c194a5f705748af52d969678c46",
    salt: "aa74a24d8dca1d927f9eafd9bb237ba5cc4f2b1a28eceb21f8b5657a71bd8d5c5e612c35aec15011f5b5dfca031cab2b563711dad243bb4dc28eceb95e067f27d773378657feaca25f8606c131b5a330b517292801b4ba68ac571c8182149e82b63179d456ad2b10eb062e96b9edc3ae774316fdd3375162e5cdb9c8254b47b9",
    sessions: new Map()
}

const app = express();
const port = 8080;
const RefreshTokenLifeTimeMs = 7 * 24 * 60 * 60 * 1000
//const RefreshTokenLifeTimeMs = 60000;

app.use(bodyParser.json());

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
    setInterval(()=>{
        console.log(user.sessions.size);
    },5000)
});

function hash(password, salt) {
    let hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    let value = hash.digest('hex');
    return {
        salt: salt,
        hash: value
    };
}

function createTokens(id, role) {
    const access_token = jwt.sign({
        id,
        role
    }, private_key, { algorithm: "HS512", expiresIn: '600s' });

    const refresh_token = crypto.randomBytes(32).toString("hex");
    return {
        access_token,
        refresh_token
    }
}

app.post("/login", (request, response) => {
    const userName = request.body.userName;
    const password = request.body.password;

    if(!userName || !password)
        return response.status(500).send("nope");

    if (typeof userName === 'string' && typeof password === 'string' && emailCompair(user.userName, userName)) {
        if (hash(password, user.salt).hash === user.passwordHashed) {

            const tokens = createTokens(user.id, user.role);
            const key = uuid.v1();

            user.sessions.set(key, {
                refresh_token: tokens.refresh_token,
                selfDestruct: setTimeout(() => {
                    user.sessions.delete(key)
                }, RefreshTokenLifeTimeMs)
            })
            
            response.send(tokens);
            return user;
        }
        response.status(500).send("nope");
        return user;
    }
    response.status(500).send("nope");
    return user;
});

app.post("/refresh", (request, response) => {
    const refreshToken = request.body.refresh_token;
    const userName = request.body.userName;
    if (!refreshToken || !userName)
        return response.status(500).send("nope");
    
    if (typeof refreshToken === 'string' && typeof userName === 'string' && emailCompair(user.userName, userName)) {
        let invalid = true;
        let guid = null;
        user.sessions.forEach((session, key )=> {
            if (session.refresh_token === refreshToken) {
                invalid = false;
                guid = key;
            }
        })
        if (!invalid) {
            const tokens = createTokens(user.id, user.role);
            user.sessions.set(guid,{
                refresh_token: tokens.refresh_token,
                selfDestruct: setTimeout(()=>{
                    user.sessions.delete(guid);
                }, RefreshTokenLifeTimeMs)
            })
            response.send(tokens);
            return user;
        }
        response.status(500).send("nope");
        return user;
    }
    response.status(500).send("nope");
    return user;
})

app.post("/validate", (request, response) => {
    const accessToken = request.body.access_token;
    if (!accessToken)
        return response.send("nope");


    try {
        jwt.verify(accessToken, private_key, { algorithm: "HS512", expiresIn: '600s' })
        response.send("good job");
    } catch {
        response.send("nope");
    }
})

function emailCompair(email1, email2) {
    const e1 = email1.trim();
    const e2 = email2.trim();

    return (e1.toLocaleLowerCase() === e2.toLocaleLowerCase());
}