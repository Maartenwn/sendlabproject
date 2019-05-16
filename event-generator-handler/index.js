const mqtt = require('mqtt');
const fs = require('fs');
const config = require('../node/config.js');
const eventManager = require('./event-manager');

// var KEY = fs.readFileSync("/root/event-generator-handler/certs/client.key");
// var CRT = fs.readFileSync("/root/event-generator-handler/certs/client.crt");
// var CA  = fs.readFileSync("/root/event-generator-handler/certs/ca.crt");

var KEY = fs.readFileSync("D:/TI/3.4/r&d/sendlabproject/event-generator-handler/certs/client.key");
var CRT = fs.readFileSync("D:/TI/3.4/r&d/sendlabproject/event-generator-handler/certs/client.crt");
var CA  = fs.readFileSync("D:/TI/3.4/r&d/sendlabproject/event-generator-handler/certs/ca.crt");

const brokerOptions = {
    port: 8883,
    host: "134.209.87.163",//config.host,
    key: KEY,
    cert: CRT,
    rejectUnauthorized: true,
    ca: CA,
    protocol: 'mqtts'
}
const dataTopic = 'data/#';
const LWTTopic = "LWT";

const client = mqtt.connect(brokerOptions);

client.on('error', function (err) {
    console.log(JSON.stringify(err))
})

client.on('connect',() =>{
    console.log("Connected to mqtt");
    eventManager.initEventManager(client);
    client.subscribe(dataTopic, (err) =>{
        if(!err){
            console.log("Connected to topic"+ dataTopic);
        }else console.log(err);
    })
    client.subscribe(LWTTopic, (err) =>{
        if(!err){
            console.log("Connected to topic"+ dataTopic);
        }else console.log(err);
    })
});

client.on('message', function (topic, message) {
    // message is Buffer
	try {
        var object = JSON.parse(message.toString());
        if(topic == LWTTopic){
            eventManager.onReceiveLastWill(object);
        }else {
            if(object.buffer != undefined){
                eventManager.onReceiveData(object,true);    
            }else {
                eventManager.onReceiveData(object,false);
            }
        }
    } catch (error) {
        
    }
})