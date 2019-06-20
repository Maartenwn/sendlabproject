const database = require('../../database/api');


const express = require("express");
const router = express.Router();


async function returnInfo(deviceId,res) {
    console.log("doe ik dit")
    await database.getCurrentData(deviceId).then(result => {
        res.status(200).json({
            result
        })
    }).catch(error =>{
        res.status(500).json({
            error
        })
    });    
}


router.get('/device/:deviceId/data',(req,res) => {
    let deviceId = req.params.deviceId;
    
    returnInfo(deviceId,res)
})  
module.exports = router;