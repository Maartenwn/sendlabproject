
var mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    deviceName: {
        type: String,
        required: true
    },

    deviceNumber: {
        type: Number,
        required: true
    }
});

module.exports = {
    Devices: deviceSchema
};