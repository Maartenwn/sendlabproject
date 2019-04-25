const express = require("express");
const router = express.Router();

router.get('/devices',(req,res) => {
    res.status(200).json({
        toDO: "return list of devices"
    })
})  
module.exports = router;