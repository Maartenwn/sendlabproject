const connectionManager = require('./connection-manager');
const metadataManger = require('./metadata-manager');
const moment = require('moment');

var client;
var eventsToSend = {};

const initEventManager = function(mqttclient){
    client = mqttclient
    setInterval(sendEvents, 2000);
}
const sendEvents = async () => {
    Object.keys(eventsToSend).forEach( (key) =>{
        client.publish("events/test",JSON.stringify(eventsToSend[key]))
    })
    eventsToSend = {};
}

const onReceiveData = function(data,isBuffer){
    if(data.identifier){
        connectionManager.addConnectionIfNotExist(data.identifier);
        metadataManger.checkForMetadata(data,data.identifier);
    }
}

const addEventToSend = function(eventData,identifier){
    if(eventsToSend[identifier] === undefined){
        const event = {
            "version-events" : 1.0,
            timestamp: moment().toISOString(),
            identifier,
            events: []
        };
        eventsToSend[identifier] = event;
    }
    eventsToSend[identifier].events.push(eventData);
}
connectionManager.initConnectionManger(addEventToSend);
metadataManger.initMetadataManager(addEventToSend);

const onReceiveLastWill = function(data){
    if(data.identifier){
        connectionManager.removeConnection(data.identifier);
    }
}



module.exports = {
    onReceiveData,
    onReceiveLastWill,
    initEventManager
}