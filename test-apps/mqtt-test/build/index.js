"use strict";

var _mqtt = _interopRequireDefault(require("mqtt"));

var _moment = _interopRequireDefault(require("moment"));

var fs = _interopRequireWildcard(require("fs"));

var path = _interopRequireWildcard(require("path"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const brokerUrl = 'mqtts://127.0.0.1';
const certPath1 = '../../../server/mosquitto/certs/lotus';
const certPath2 = '../../../server/mosquitto/ca_certificates';
var KEY = fs.readFileSync(path.join(certPath1, '/client.key'));
var CERT = fs.readFileSync(path.join(certPath1, '/client.crt'));
var TRUSTED_CA_LIST = fs.readFileSync(path.join(certPath2, '/ca.crt'));
const brokerOptions = {
  port: 8883,
  host: 'sendlabserver',
  key: KEY,
  cert: CERT,
  rejectUnauthorized: true,
  ca: TRUSTED_CA_LIST,
  protocol: 'mqtts'
};
const testTopic = 'testTopic';

const mqttClient = _mqtt.default.connect(brokerOptions);

console.log(TRUSTED_CA_LIST);

const simulateLotus = async () => {
  let mqttMessage = {
    'version-api': '1.0',
    timestamp: (0, _moment.default)().toISOString(),
    identifier: "lotus-001",
    data: {},
    sensors: [{
      "sensor-name": "true/false"
    }, {
      "sensor-name2": "true/false"
    }]
  };
  console.log(mqttMessage);
};

mqttClient.on('connect', () => {
  console.log('Connected to mqtt!');
});
setInterval(simulateLotus, 1000);