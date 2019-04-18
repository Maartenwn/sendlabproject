import  mqtt from 'mqtt';
import moment from 'moment';
import fs from 'fs';
import path from 'path'

const brokerUrl = 'mqtts://localhost';
const certPath = '../../../server/';
var KEY = fs.readFileSync(path.join(certPath, '/tls-key.pem'))
var CERT = fs.readFileSync(path.join(certPath, '/tls-cert.pem'))
var TRUSTED_CA_LIST = fs.readFileSync(path.join(certPath, '/crt.ca.cg.pem'))

const brokerOptions = {
  port: 8883,
  host: 'TEST-APP',
  key: KEY,
  cert: CERT,
  rejectUnauthorized: true,
  ca: TRUSTED_CA_LIST,
  protocol: 'mqtts'
}
const testTopic = 'testTopic';
const mqttClient = mqtt.connect(brokerUrl, brokerOptions);

const simulateLotus = async () => {
  while(true) {
    let mqttMessage = {
      'version-api': '1.0', 
      timestamp: "YYYY-MM-DDTHH:MM:SS+HH:MM",
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
  }
}

mqttClient.on('connect', () => {
  mqttClient.subscribe(testTopic, (error) => {
      if (error) throw new Error(error.message);
  });
  console.log('Connected to mqtt!');
});

simulateLotus();