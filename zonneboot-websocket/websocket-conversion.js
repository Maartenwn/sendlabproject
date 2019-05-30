const moment = require('moment');

const latestZonnebootObject = {}; 
var ws;

const onReceiveZonnebootdata = (data)=>{
    Object.keys(data).forEach(key => {
        let objects = data[key.toString()];
        let latestObject = undefined;
        objects.forEach(element => {
            console.log(element)
            if(latestObject === undefined || moment(new Date(element.timestamp)).isAfter(moment(new Date(latestObject.timestamp)))){
                latestObject = element
            }
        });
        latestZonnebootObject[key.toString()] = latestObject
    });
    latestZonnebootObject.timestamp = moment().toISOString();
    ws.send(JSON.stringify(latestZonnebootObject))
    console.log(latestZonnebootObject);
}
const initWebsocketConversion = (websocket)=>{
    ws = websocket;
}

module.exports = {
    onReceiveZonnebootdata,
    initWebsocketConversion
}