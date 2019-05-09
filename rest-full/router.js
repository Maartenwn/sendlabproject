const express = require('express');
const router = express.Router();
const current = require('./routes/current.js');
const device = require('./routes/device.js');
const devices = require('./routes/devices.js');
const historic = require('./routes/historic.js');


router.use('/current',current);
router.use('/historic',historic);
router.use('/device',device);
router.use('/devices',devices);



module.exports = router;