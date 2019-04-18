"use strict";

var _mqtt = _interopRequireDefault(require("mqtt"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const brokerUrl = 'mqtts://localhost';
const brokerOptions = {
  port: 8883
}; //username: '', password: ''

const testTopic = 'testTopic';

const mqttClient = _mqtt.default.connect(brokerUrl, brokerOptions);

const simulateLotus = async () => {
  while (true) {
    let mqttMessage = {
      'version-api': '1.0',
      timestamp: "YYYY-MM-DDTHH:MM:SS+HH:MM",
      identifier: "lotus-001",
      data: {},
      sensors: [{
        "sensor-name": "true/false"
      }, {
        "sensor-name2": "true/false"
      }]
    };
  }
};

mqttClient.on('connect', () => {
  mqttClient.subscribe(testTopic, error => {
    if (error) throw new Error(error.message);
  });
  console.log('Connected to mqtt!');
});
simulateLotus();