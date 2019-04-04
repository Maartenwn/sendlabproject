const mqtt = require('mqtt');

const client = mqtt.connect("mqtt://188.166.61.139:1883");

client.on('connect',() =>{
    console.log("Connected to mqtt");
    client.subscribe("test", (err) =>{
        if(!err){
            console.log("Connected to topic"+ "tes");
            //client.publish(settings.topic.toString(),"nieuw test");
        }else console.log(err);
    })
});