const express = require("express");
const router = express.Router();

router.get('/device/:deviceId/data',(req,res) => {
    res.status(200).json({
        test: "current"
    })
})  
module.exports = router;