import  mqtt from 'mqtt';
import moment from 'moment';
import * as fs from 'fs';
import * as path from 'path'

// const brokerUrl = 'mqtts://127.0.0.1';
const certPath1 = '../../../server/mosquitto/certs/lotus';
const certPath2 = '../../../server/mosquitto/ca_certificates';
var KEY = fs.readFileSync(path.join(certPath1, '/client.key'))
var CERT = fs.readFileSync(path.join(certPath1, '/client.crt'))
var TRUSTED_CA_LIST = fs.readFileSync(path.join(certPath2, '/ca.crt'))

const brokerOptions = {
  port: 8883,
  host: 'sendlabserver',
  key: KEY,
  cert: CERT,
  rejectUnauthorized: true,
  ca: TRUSTED_CA_LIST,
  protocol: 'mqtts'
}
const testTopic = 'testTopic';
const mqttClient = mqtt.connect(brokerOptions);
console.log(TRUSTED_CA_LIST);
const simulateLotus = async () => {
  let mqttMessage = {
    'version-api': '1.0', 
    timestamp: moment().toISOString(),
    identifier: "lotus-001" ,
    data: {
      
    },
    sensors:[
      {
        "sensor-name": "true/false"
      },			
      {
        "sensor-name2": "true/false"
      }
    ]
  }
  console.log(mqttMessage);
}

mqttClient.on('connect', () => {
  console.log('Connected to mqtt!');
});

setInterval(simulateLotus, 1000);


