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
    let value = item[key];

    if(typeof value !== 'boolean') {
      value = (value === 'true');
    }
  
    if (deviceSensors[key] == false && value == true) {
      callback({
        type: "sensor-on",
        message: `${key} has turned on.`
      }, identifier);
    } else if (deviceSensors[key] == true && value == false) {
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
    let value = item[key];
    if(typeof value !== 'boolean') {
      value = (value === 'true');
    }
    newSensorObject[key] = value
  });
  devices[identifier] = newSensorObject;
};

module.exports = {
  initSensorManager,
  checkSensors
}