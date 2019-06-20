const express = require("express");
const router = express.Router();
const database = require('../../database/api');

async function returnInfo(deviceId,res,mode,start,end) {
    await database.getHistoricData(deviceId,start,end).then(result => {
        res.status(200).json({
            result
        })
    }).catch(error =>{
        res.status(500).json({
            error
        })
    });    
}

router.get('/device/:deviceID/data/:mode',(req,res) => {
    let mode = req.params.mode
    let deviceID = req.params.deviceID
    let start = req.query.start
    let end = req.query.end
    let interval = req.query.interval
    if( (mode === "min"| mode === "max"| mode === "avg") &&
        deviceID != undefined && start != undefined && end != undefined && interval != undefined ){
        let isStartValid = (new Date(start)).getTime() > 0;
        let isEndValid = (new Date(end)).getTime() > 0;
        if(isStartValid && isEndValid){
            returnInfo(deviceID,res,mode,start,end);  //todo implement interval
        }else res.status(417).send("Niet voldaan aan verwachting")
    }else res.status(404).send();
})  

router.get('/device/:deviceID/data',(req,res) => {
    let deviceID = req.params.deviceID
    let start = req.query.start
    let end = req.query.end
    let interval = req.query.interval
    if(deviceID != undefined && start != undefined && end != undefined && interval != undefined ){
        res.status(200).json({
            deviceID: deviceID,
            start: start,
            end : end,
            interval: interval,
        })
    }else res.status(404);
})    
module.exports = router;