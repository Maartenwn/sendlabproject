const express = require("express");
const router = express.Router();

router.get('/device/:deviceID/data/min',(req,res) => {
    res.status(200).json({
        test: "min"
    })
})  

router.get('/device/:deviceID/data/max',(req,res) => {
    res.status(200).json({
        test: "max"
    })
})  

router.get('/device/:deviceID/data/avg',(req,res) => {
    res.status(200).json({
        test: "avg"
    })
})

router.get('/device/:deviceID/data',(req,res) => {
    res.status(200).json({
        test: "all"
    })
})    
module.exports = router;