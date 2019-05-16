const moment = require('moment');

var callback;

var devicesConnected = {}
var devicesDisconnected = {};

const initConnectionManger = function(callbackEvent){
    callback = callbackEvent;
}

const addConnectionIfNotExist = function(identifier) {
    if(!devicesConnected[identifier] && !devicesDisconnected[identifier]){
        devicesConnected[identifier] = moment().toISOString();
    }else if(!devicesConnected[identifier] && devicesDisconnected[identifier]){
        devicesConnected[identifier] = moment().toISOString();
        console.log("test");
        callback({
            type: "connection-reastablised",
            message: `${identifier} has reastablised connection, ${identifier}'s previous call was at ${devicesDisconnected[identifier]}`
        },identifier);

        if(devicesDisconnected[identifier]){
            delete devicesDisconnected[identifier]
        }
    }else if(devicesConnected[identifier]){
        devicesConnected[identifier] = moment().toISOString();
    }
}

const removeConnection = function(identifier){
    if(devicesConnected[identifier]){
        devicesDisconnected[identifier] = moment().toISOString();
        callback({
            type: "connection-lost",
            message: `${identifier} has lost connection, ${identifier}'s last call was at ${devicesConnected[identifier]}`
        },identifier);
        delete devicesConnected[identifier]
    }
}
module.exports = {
    addConnectionIfNotExist,
    removeConnection,
    initConnectionManger
}