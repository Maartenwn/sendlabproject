const express = require('express');
const parser = require('body-parser');
const jwt = require('jsonwebtoken');
const key = require('./jwt.js');
const router = require('./router.js');

console.log('Starting...');

let isTesting = true;

var app = express();
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

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

app.listen(23450, function () {
    console.log('server started');
});