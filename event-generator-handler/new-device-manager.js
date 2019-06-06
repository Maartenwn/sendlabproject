var callback;

const initNewDeviceManager = (callbackEvent)=>{
    callback = callbackEvent;
    //todo load devices in from database
}

let devices = [];

const checkForNewDevice = (identifier)=>{
    if(!devices.includes(identifier)){
        callback({
            type: "new-device",
            message: "A new device has been added: " + identifier
        },identifier);
        devices.push(identifier);
    }
}

module.exports = {
    initNewDeviceManager,
    checkForNewDevice
}