// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
window.$ = window.jquery = require('./../node_modules/jquery');
window.dt = require('./../node_modules/datatables.net-bs4')();
require('./../node_modules/datatables.net/js/jquery.dataTables.js')
require('./../node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js')


$(document).ready( function () {
    var table = $('#table_id').DataTable({
        "pageLength": 20,
        "lengthChange" : false,
        "sDom":' <"search"f><"top"l>rt<"bottom"ip><"clear">',
        "language": {
            "search": "Filter records: "
        },
        "paging": true,
        "order": [[ 1, "dec" ]],
        "columns": [
            { "width": "5%" },
            { "width": "13%" },
            { "width": "13%" },
            { "width": "13%" },
            { "width": "56%" }
        ],
        columnDefs: [ {
                targets: [ 0 ],
                orderData: [ 0, 1 ],
                orderSequence : ["desc","asc"]
            },
            {
                targets: [ 2 ],
                orderData: [ 2, 1 ],
                orderSequence : ["desc","asc"]
            },
            {
                targets: [ 3 ],
                orderData: [ 3, 1 ],
                orderSequence : ["desc","asc"]

            },{
                targets: [ 4 ],
                orderData: [ 4, 1 ],
                orderSequence : ["desc","asc"]
            }
        ],
        "scrollY":"790px",
        "scrollCollapse": true
    });

    const mqtt = require('mqtt');
    const moment = require('moment');
    const fs = require('fs');
    const path = require('path');
    var KEY = fs.readFileSync(__dirname + '/certs/client.key')
    var CERT = fs.readFileSync(__dirname + '/certs/client.crt')
    var TRUSTED_CA_LIST = fs.readFileSync(__dirname + '/certs/ca.crt')
    
    const brokerOptions = {
        port: 8883,
        host: '134.209.87.163',
        key: KEY,
        cert: CERT,
        rejectUnauthorized: true,
        ca: TRUSTED_CA_LIST,
        protocol: 'mqtts'
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

                    var rowNode = table.row.add([json["version-events"],json.timestamp,json.identifier,event.type,event.message]).draw().node();
                    
                    switch(event.type){
                        case "wrong-metadata": 
                            $(rowNode).css('background','#db0502');
                            $(rowNode).css('color','white');
                            break;
                        case "connection-reastablised":
                            $(rowNode).css('background','darkgreen');
                            $(rowNode).css('color','white');
                            break;
                        case "connection-lost":
                            $(rowNode).css('background','orangered');
                            $(rowNode).css('color','white');
                            break
                        case "sensor-on":
                            $(rowNode).css('background','#34963b');
                            $(rowNode).css('color','white');
                            break
                        case "sensor-off":
                            $(rowNode).css('background','orange');
                            $(rowNode).css('color','black');
                            break
                        case "new-device":
                            $(rowNode).css('background','#1000ff');
                            $(rowNode).css('color','white');
                            break
                        case "value-odd":
                            $(rowNode).css('background','yellow');
                            $(rowNode).css('color','black');
                            break
                        case "undefined-error":
                            $(rowNode).css('background','#3d0101');
                            $(rowNode).css('color','white');
                            break
                    }

                }else console.error("Wrong error message: " + message.toString())
            });
        } catch (error) {
            console.error(error.message);
        }
    })
} );
