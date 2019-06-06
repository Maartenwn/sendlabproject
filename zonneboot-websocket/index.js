const mqtt = require('mqtt');
const fs = require('fs');
const config = require('../node/config.js');
const websocketConversion = require('./websocket-conversion');
const moment = require('moment');


var KEY = fs.readFileSync("./certs/client.key");
var CRT = fs.readFileSync("./certs/client.crt");
var CA  = fs.readFileSync("./certs/ca.crt");

const brokerOptions = {
    port: 8883,
    host: config.host,
    key: KEY,
    cert: CRT,
    rejectUnauthorized: true,
    ca: CA,
    protocol: 'mqtts'
}
const dataTopic = 'data/zonneboot';

const WebSocket = require('ws')
//const httpsServer = require('https');

//var privateKey = fs.readFileSync('ssl-cert/privkey.pem', 'utf8');
//var certificate = fs.readFileSync('ssl-cert/fullchain.pem', 'utf8');

//var credentials = { key: privateKey, cert: certificate };
//var httpsServer = https.createServer(credentials);
//httpsServer.listen(8443);

// var WebSocketServer = require('ws').Server;
// var wss = new WebSocketServer({
//     server: httpsServer
//});

//sudo certbot certonly --standalone -d example.com 

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', ws => {
    console.log("Connected");
    ws.on('message', message => {
        console.log(`${message}`)
    });

    websocketConversion.initWebsocketConversion(ws);

    const client = mqtt.connect(brokerOptions);

    client.on('error', function (err) {
        console.log(JSON.stringify(err))
    })

    client.on('connect',() =>{
        console.log("Connected to mqtt");
        
        client.subscribe(dataTopic, (err) =>{
            if(!err){
                console.log("Connected to topic"+ dataTopic);
            }else console.log(err);
        })
    });

    client.on('message', function (topic, message) {
        try {
            var object = JSON.parse(message.toString());
            websocketConversion.onReceiveZonnebootdata(object.data);
        } catch (error) {
            console.error(error.toString());
        }
    })
})

