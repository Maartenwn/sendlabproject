const moment = require('moment');
const settings = require('./settings.json');

var callback;
const initMetadataManager = (callbackEvent) =>{
    callback = callbackEvent;
}

const checkForMetadata = (data,identifier,isBuffer) =>{
    let message = "";
    if(data["version-api"]){
        if(data["version-api"] != settings.metadata["version-api"]) {
            message += "Wrong version number - ";
        }
    }else {
        message += "Property version-api does not exist - ";
    }

    if(data.timestamp){
        if(!moment(new Date(data.timestamp)).isValid()){
            message += "Timestamp is not valid - ";
        }else if(moment(new Date(data.timestamp)).isUTC()){
            message += "Timestamp is not in the UTC format - "
        }
    }else {
        message += "Property timestamp does not exist - ";
    }

    if(!data.identifier){
        message += "Property identifier does not exist - ";
    }

    if(!data.data){
        message += "Property data does not exist - ";
    }else if(typeof data.data !== 'object' && !Array.isArray(data.data)){
        message += "Property is not an object - ";
    }else if(Object.keys(data.data).length == 0){
        message += "Property data is emtpy - ";
    }else if(isBuffer){
        var keys = Object.keys(data.data);
        keys.forEach(datakeys => {
          if(!data.buffer.includes(datakeys)){
            message+= "buffer doesn't contain " + datakeys + " - ";
          }
        })

        data.buffer.forEach(key => {
            if(keys.includes(key)){
                data.data[key.toString()].forEach(table => {
                    if(!table.timestamp){
                        message += "data." + key + "property timestamp does not exist - "
                    }else if(!moment(new Date(table.timestamp)).isValid()){
                        message += "data." + key + " timestamp is not valid - ";
                    }else if(moment(new Date(table.timestamp)).isUTC()){
                        message += "data." + key + " timestamp is not in the UTC format - "
                    }
                })
            }else {
                message+= "data doesn't contain " + key + " - ";
            }
        });
    }

    if(!data.sensors){
        message += "Property sensors does not exist - ";
    }else if(!Array.isArray(data.sensors)){
        message += "Property is not an array - "; 
    }else if(data.sensors.length === 0){
        message += "Sensors is empty - "
    }else {
        data.sensors.forEach(sensor => {
            if(Object.keys(sensor).length === 0){
                message += `Sensors has an empty sensor object - `;
            }else {
                Object.keys(sensor).forEach( (key) =>{
                    if(typeof sensor[key] !== 'boolean' && sensor[key] !== "true" && sensor[key] !== "false"){
                        message += `Sensor: ${key} is not an boolean - `;
                    }
                })
            }
        });
    }

    

    if(message.length > 0){
        var newmessage = message.substring(0, message.length-2);
        callback({
            type: "wrong-metadata",
            message: `${identifier} tried to push wrong metadata: ${newmessage}`
        },identifier);
    }
}

module.exports = {
    initMetadataManager,
    checkForMetadata
}
