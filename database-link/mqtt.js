const mqtt = require('mqtt');
const fs = require('fs');
const config = require('../node/config.js');
const database = require("./../database/api.js");

var KEY = fs.readFileSync("./certs/client.key");
var CRT = fs.readFileSync("./certs/client.crt");
var CA  = fs.readFileSync("./certs/ca.crt");

const brokerOptions = {
    port: 8883,
    host: config.host,
    key: KEY,
    cert: CRT,
    rejectUnauthorized: true,
    ca: CA,
    protocol: 'mqtts'
}
const dataTopic = 'data/#';

const client = mqtt.connect(brokerOptions);

client.on('error', function (err) {
    console.log(err)
})

client.on('connect',() =>{
    console.log("Connected to mqtt");
    
    client.subscribe(dataTopic, (err) =>{
        if(!err){
            console.log("Connected to topic"+ dataTopic);
        }else console.log(err);
    })
});

client.on('message', function (topic, message) {
    // message is Buffer
	try {
		var object = JSON.parse(message.toString());
		if(object.buffer != undefined){

			/*Buffer-modus*/ 
			var bufferdata = Object.entries(object.data);
			bufferdata.forEach(buffer => {
				var idValue = buffer[0]; //key value of attribute
				buffer[1].forEach(e => { //loop through array
					//console.log("Identiefier: " + object.identifier + "/" + idValue+  " Timestamp: " + e.timestamp + '\n' + "data: " + JSON.stringify(e));
					//e.identifier = object.identifier + "/" + idValue;
					var send = {};
					send.identifier = object.identifier;
					var data = {};
					data[idValue] = e;
					data.timestamp = object.timestamp;
					send.data = data;
					//console.log(send);
					database.saveData(send);
				});
			});
		}else {
			
			/*Non-buffer-modus*/
			//console.log("Identiefier: " + object.identifier +  " Timestamp: " + object.timestamp + '\n' + "data: " + JSON.stringify(object.data));
			//object.data.identifier = object.identifier;
			//object.data.timestamp = object.timestamp

			var send = {};
			send.identifier = object.identifier;
			send.data = object.data;
			send.timestamp = object.timestamp;
			//console.log(send);
			database.saveData(send);
		}
    } catch (error) {
        
    }

})