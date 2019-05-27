// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require('electron')
const mqtt = require('mqtt');
const moment = require('moment');
const fs = require('fs');
const path = require('path');
var KEY = fs.readFileSync('./certs/client.key')
var CERT = fs.readFileSync('./certs/client.crt')
var TRUSTED_CA_LIST = fs.readFileSync('./certs/ca.crt')

const brokerOptions = {
  port: 8883,
  host: '134.209.87.163',
  key: KEY,
  cert: CERT,
  rejectUnauthorized: true,
  ca: TRUSTED_CA_LIST,
  protocol: 'mqtts',
  will:{
	  topic: "LWT",
	  payload: "{identifier: 'test_device-001'}",
	  qos: 2
  }
}
const mqttClient = mqtt.connect(brokerOptions);

mqttClient.on('connect', function () {
    mqttClient.subscribe('events/#', function (err) {
      console.log("Subscribed to events/#");
    })
  })

  mqttClient.on('message', function (topic, message) {
    // message is Buffer
    try {
        var json = JSON.parse(message);
        json.events.forEach(event => {
            if(json["version-events"] && json.timestamp && json.identifier && event.message && event.type){   
                const tr = document.createElement("tr");
                let version = document.createElement("td");
                version.classList.add("text-nowrap");
                version.innerHTML= json["version-events"];
                tr.appendChild(version)

                let timestamp = document.createElement("td");
                timestamp.classList.add("text-nowrap");
                timestamp.innerHTML= json.timestamp;
                tr.appendChild(timestamp);

                let identifier = document.createElement("td");
                identifier.classList.add("text-nowrap");
                identifier.innerHTML= json.identifier;
                tr.appendChild(identifier);

                let type = document.createElement("td");
                type.classList.add("text-nowrap");
                type.innerHTML= event.type;
                tr.appendChild(type);

                switch(event.type){
                    case "wrong-metadata": 
                        tr.style.background = '#a21616';
                        tr.style.color = "white";
                        break;
                    case "connection-reastablised":
                        tr.style.background = '#3d7733'
                        tr.style.color = 'white'
                        break;
                    case "connection-lost":
                        tr.style.background = '#650087'
                        tr.style.color = 'white'
                        break
                    case "sensor-on":
                        tr.style.background = '#0a048c'
                        tr.style.color = 'white'
                        break
                    case "sensor-off":
                        tr.style.background = '#afa002'
                        tr.style.color = 'white'
                        break
                    case "new-device":
                        tr.style.background = '#011c11'
                        tr.style.color = 'white'
                        break
                }

                let message = document.createElement("td");
                message.classList.add("break-all");
                message.innerHTML= event.message;
                tr.appendChild(message);

                var list  = document.getElementById("table_row")
                list.insertBefore(tr,list.childNodes[0])
                while(list.childNodes.length > 1000){
                    list.removeChild(list.childNodes[list.childNodes.length - 1]);
                }
            }else console.log(message.toString())
        });
      } catch (error) {
        console.log(error.message);
      }
  })