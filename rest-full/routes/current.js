const database = require('../../database/api');


const express = require("express");
const router = express.Router();



router.get('/device/:deviceId/data',(req,res) => {
    let deviceId = req.params.deviceId;
    
    //await database.getCurrentData().then(result => {
        res.status(200).json({
            "test":"current"
        })
    //}).catch(error =>{
    //    res.status(500).json({
    //        error
    //    })
    //});    
})  
module.exports = router;