var callback;
var devices = {};

const initSensorManager = (callbackEvent) => {
  callback = callbackEvent
};

const checkSensors = ({ identifier, sensors }) => {
  if (!devices[identifier]) {
    updateData(identifier, sensors)
    return;
  }

  const deviceSensors = devices[identifier];

  sensors.forEach((item) => {
    const key = Object.keys(item)[0];
    const value = item[key];

    const valid = (typeof value == 'boolean') ? true : 'true';
    const invalid = (typeof value == 'boolean') ? false : 'false';

    if (deviceSensors[key] == invalid && value == valid) {
      callback({
        type: "sensor-on",
        message: `${key} has turned on.`
      }, identifier);
    } else if (deviceSensors[key] == valid && value == invalid) {
      callback({
        type: "sensor-off",
        message: `${key} has turned off.`
      }, identifier);
    }

  });
  updateData(identifier, sensors)
};

const updateData = (identifier, sensors) => {
  let newSensorObject = {};
  sensors.forEach((item) => {
    const key = Object.keys(item)[0];
    const value = item[key];
    newSensorObject[key] = value
  });
  devices[identifier] = newSensorObject;
};

module.exports = {
  initSensorManager,
  checkSensors
}