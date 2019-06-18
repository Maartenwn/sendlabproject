const express = require('express');
const parser = require('body-parser');
const jwt = require('jsonwebtoken');
const key = require('./jwt.js');
const router = require('./router.js');
const cors = require('cors');
const fs = require('fs')

console.log('Starting...');
var https = require('https');
var privateKey  = fs.readFileSync('ssl-sert/privkey.pem', 'utf8');
var certificate = fs.readFileSync('ssl-sert/fullchain.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};

let isTesting = false;

var app = express();

var httpsServer = https.createServer(credentials, app);
httpsServer.listen(23450);


app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.all('*', (req, res, next) => {
    if (req.headers.authorization == undefined) {
        res.status(401).send('Unauthorized');
        return;
    }
    
    let typeKey = req.headers.authorization.split(' ')[0];
    let access_token = req.headers.authorization.split(' ')[1];

    const jwtOptions = { algorithm: 'HS512' };
    const valid = jwt.verify(access_token, key.trim(), jwtOptions, (error, result) => {
        if (error) {
            console.log(error);
            return false;
        }
        else return true;
    });

    if (typeKey == 'bearer' && valid | isTesting) {
        next();
    } else res.status(401).send('Unauthorized')
});
app.use('/IoT/api', router);

