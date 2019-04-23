"use strict";

var _mqtt = _interopRequireDefault(require("mqtt"));

var _moment = _interopRequireDefault(require("moment"));

var fs = _interopRequireWildcard(require("fs"));

var path = _interopRequireWildcard(require("path"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const brokerUrl = 'mqtts://127.0.0.1';
const certPath1 = '../../../server/mosquitto/certs/test_device';
const certPath2 = '../../../server/mosquitto/ca_certificates';
var KEY = fs.readFileSync(path.join(certPath1, '/client.key'));
var CERT = fs.readFileSync(path.join(certPath1, '/client.crt'));
var TRUSTED_CA_LIST = fs.readFileSync(path.join(certPath2, '/ca.crt'));
const brokerOptions = {
  port: 8883,
  host: '134.209.87.163',
  key: KEY,
  cert: CERT,
  rejectUnauthorized: true,
  ca: TRUSTED_CA_LIST,
  protocol: 'mqtts'
};
const testTopic = 'data/test_device';

const mqttClient = _mqtt.default.connect(brokerOptions);

mqttClient.on('error', function (err) {
  console.log(JSON.stringify(err));
});

const simulateLotus = async () => {
  var number = Math.random() * 100;
  let rString = Math.random().toString(36).substring(7);
  let mqttMessage = {
    "version-api": '1.0',
    timestamp: (0, _moment.default)().toISOString(),
    identifier: "test_device-001",
    data: {
      testData1: number,
      testData2: rString,
      testData3: "true"
    },
    sensors: [{
      "test_sensor_1": "true"
    }, {
      "test_sensor_2": "true"
    }]
  };
  mqttClient.publish('data/test_device', JSON.stringify(mqttMessage));
  console.log(mqttMessage);
};

mqttClient.on('connect', () => {
  console.log('Connected to mqtt!');
});
setInterval(simulateLotus, 10000);