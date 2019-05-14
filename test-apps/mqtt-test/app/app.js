const mqtt = require('mqtt');
const moment = require('moment');
const fs = require('fs');
const path = require('path');

var KEY = fs.readFileSync('./certs/client.key')
var CERT = fs.readFileSync('./certs/client.crt')
var TRUSTED_CA_LIST = fs.readFileSync('./certs/ca.crt')

const brokerOptions = {
  port: 8883,
  host: '134.209.87.163',
  key: KEY,
  cert: CERT,
  rejectUnauthorized: true,
  ca: TRUSTED_CA_LIST,
  protocol: 'mqtts',
  will:{
	  topic: "LWT",
	  payload: "{identifier: 'test_device-001'}",
	  qos: 2
  }
}
const testTopic = 'data/test_device';

const mqttClient = mqtt.connect(brokerOptions);

mqttClient.on('error', function (err) {
  console.log(JSON.stringify(err))
})
const simulateLotus = async () => {
	var number = Math.random() * 100;
	let rString = Math.random().toString(36).substring(7);
  let mqttMessage = {
    "version-api": 	'1.0', 
    timestamp: 		moment().toISOString(),
    identifier: 	"test_device-001" ,
    data: {
		testData1: number,
		testData2: rString,
		testData3: "true"		
    },
    sensors:[
      {
        "test_sensor_1": "true"
      },			
      {
        "test_sensor_2": "true"
      }
    ]
  }
  mqttClient.publish('data/test_device',JSON.stringify(mqttMessage));
  //console.log(mqttMessage);
}

const simulateBuffer = async () => {
  let mqttMessage = {
    "version-api": 	'1.0', 
    timestamp: 		moment().toISOString(),
    identifier: 	"test_device-001" ,
    buffer: ["testData1","testData2","testData3"],
	data: {
		testData1: [ 
			{
				testData1: (Math.random() * 100),
				timestamp: 	moment().toISOString()
			},
			{
				testData1: (Math.random() * 100),
				timestamp: 	moment().toISOString()
			}
		],
		testData2: [
			{
				testData2: (Math.random().toString(36).substring(7)),
				timestamp: 	moment().toISOString()
			},
			{
				testData2: (Math.random().toString(36).substring(7)),
				timestamp: 	moment().toISOString()
			}
		],
		testData3: [
			{
				testData3: true,
				timestamp: 	moment().toISOString()
			},
			{
				testData3: false,
				timestamp: 	moment().toISOString()
			}
		],	
    },
    sensors:[
      {
        "test_sensor_1": "true"
      },			
      {
        "test_sensor_2": "true"
      }
    ]
  }
  mqttClient.publish('data/test_device',JSON.stringify(mqttMessage));
  //console.log(JSON.stringify(mqttMessage));
}
mqttClient.on('connect'	, () => {
  console.log('Connected to mqtt!');
});

setInterval(simulateLotus, 10000);
setInterval(simulateBuffer,10000);


