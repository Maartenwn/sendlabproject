const moment = require('moment');
const settings = require('./settings.json');

var callback;
const initMetadataManager = (callbackEvent) =>{
    callback = callbackEvent;
}

const checkForMetadata = (data,identifier) =>{
    let message = "";
    if(data["version-api"]){
        if(data["version-api"] != settings.metadata["version-api"]) {
            message += "Wrong version number. ";
        }
    }else {
        message += "Property version-api does not exist. ";
    }

    if(data.timestamp){
        if(!moment(new Date(data.timestamp)).isValid()){
            message += "Timestamp is not valid. ";
        }else if(moment(new Date(data.timestamp)).isUTC()){
            message += "Timestamp is not in the UTC format"
        }
    }else {
        message += "Property timestamp does not exist. ";
    }

    if(!data.identifier){
        message += "Property identifier does not exist. ";
    }

    if(!data.data){
        message += "Property data does not exist. ";
    }else if(typeof data.data !== 'object'){
        message += "Property is not an object. ";
    }else if(Object.keys(data.data).length == 0){
        message += "Property data is emtpy. ";
    }

    if(!data.sensors){
        message += "Property sensors does not exist. ";
    }else if(!Array.isArray(data.sensors)){
        message += "Property is not an array. "; 
    }else if(data.sensors.length === 0){
        message += "Sensors is empty. "
    }else {
        data.sensors.forEach(sensor => {
            if(Object.keys(sensor).length === 0){
                message += `Sensors has an empty sensor object. `;
            }else {
                Object.keys(sensor).forEach( (key) =>{
                    if(typeof sensor[key] !== 'boolean' && sensor[key] !== "true" && sensor[key] !== "false"){
                        message += `Sensor: ${key} is not an boolean. `;
                    }
                })
            }
        });
    }
    if(message.length > 0){
        callback({
            type: "wrong-metadata",
            message: `${identifier} tried to push wrong metadata: ${message}`
        },identifier);
    }
}

module.exports = {
    initMetadataManager,
    checkForMetadata
}
