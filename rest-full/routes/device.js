const express = require("express");
const router = express.Router();

router.post('/:deviceId/command',(req,res) => {
    let deviceId = req.params.deviceId;
    res.status(200).json({
        toDO:"Implement command",
        body: req.body
    });
})  
module.exports = router;    