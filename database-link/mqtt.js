const mqtt = require('mqtt');
const fs = require('fs');
const config = require('../node/config.js');
const database = require("./../database/api");

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
    console.log(JSON.stringify(err))
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
					console.log("Identiefier: " + object.identifier + "/" + idValue+  " Timestamp: " + timestamp + '\n' + "data: " + JSON.stringify(e));
					data.identifier = object.identifier;
					database.saveData(data);
				});
			});
		}else {
			
			/*Non-buffer-modus*/
			console.log("Identiefier: " + object.identifier +  " Timestamp: " + object.timestamp + '\n' + "data: " + JSON.stringify(object.data));
			//database store method identiefier - timestamp - data
		}
    } catch (error) {
        
    }

})