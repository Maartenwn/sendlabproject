import bodyParser from "body-parser";
import crypto from "crypto";
import express from "express";

//import { users } from '../shadow/users.js';
import { private_key } from '../shadow/jwt.js';
import * as jwt from 'jsonwebtoken';

var users = [
    {
        userName: "root",
        id: "b5bb20650eece726645891c81b9e9618",
        role: "admin",
        passwordHashed: "c6f038f9265cd8d9ecb841948c7086da3e716b2c5e95a1e9a1a8d20d63ff09627913cc88a7d479a8fde261de6ee650702dfa5c669d7583a3c9f7d09457f07a80",
        salt: "492330363fbed184b7f574e84d283f4b3507d7a8a3d7e2c9635d08529c6c3716346f3eb5b9397ec03596ffa043c18fb4ec7e1ee53cfed9fa9e994bb1970b326d",
        twoWayAuthSeed: "07414149916e647534c77133e4369496", //base32  A5AUCSMRNZSHKNGHOEZ6INUUSY,
        refresh_token: null
    }
]

const app = express();
const port = 8080;

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
    console.log(private_key);
    const access_token = jwt.sign({
        id,
        role
    }, private_key, { algorithm: "HS512" });

    const refresh_token = crypto.randomBytes(32).toString("hex");
    return {
        access_token,
        refresh_token
    }
}

app.post("/login", (request, response) => {
    const userName = request.body.userName;
    const password = request.body.password;
    const timeCode = Math.trunc(Date.now() / 30000).toString(16).padStart(16,'0');
    const hotp = request.body.hotp;

    users = users.map((user) => {
        if (emailCompair(request.body.userName, userName)) {
            if (hash(password, user.salt).hash === user.passwordHashed) {
                const HMAC = crypto.createHmac('sha1', new Buffer(user.twoWayAuthSeed,"hex")).update(new Buffer(timeCode, "hex")).digest();
                const HOTP = truncate(HMAC).toString().padStart(6,"0");

                if(hotp === HOTP){
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
        }
        response.status(500).send("nope");
        return user;
    });
    response.status(500).send("nope");
    return user;
});

app.post("/refresh", (request, response)=>{
    const refreshToken = request.body.refresh_token;
    const userName = request.body.userName;

    users = users.map(user =>{
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
    });
    response.status(500).send("nope");
    return user;
})

function emailCompair(email1, email2) {
    const e1 = email1.trim();
    const e2 = email2.trim();

    return (e1.toLocaleLowerCase() === e2.toLocaleLowerCase());
}

function truncate(hmac) {
    let offset = hmac[19] & 0xf;
    const truncatedHash =
        (hmac[offset] & 0x7f) << 24 |
        (hmac[offset + 1] & 0xff) << 16 |
        (hmac[offset + 2] & 0xff) << 8 |
        (hmac[offset + 3] & 0xff)
    return truncatedHash % Math.pow(10, 6);
}