//import { Schema, model } from 'mongoose';
var mongoose = require('mongoose');

const throttle = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    cur: {
        type: Number,
        required: true
    },

    spd: {
        type: Number,
        required: true
    }
})

const phase = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },
    
    cur: {
        type: Number,
        required: true
    }
})

const steer = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    dir: {
        type: Boolean,
        required: true
    }
})

const mtrState = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    state: {
        type: Number,
        required: true
    },

    enable: {
        type: Boolean,
        required: true
    },

    ready: {
        type: Boolean,
        required: true
    },

    error: {
        type: Boolean,
        required: true
    }
})

const mtrSpeed = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    ramp: {
        type: Number,
        required: true
    },

    rpm: {
        type: Number,
        required: true
    }
})

const mtrPower = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    mbv: {
        type: Number,
        required: true
    },

    pvu: {
        type: Number,
        required: true
    },

    pvv: {
        type: Number,
        required: true
    },

    pvw: {
        type: Number,
        required: true
    }
})

const mtrFlags = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    uv: {
        type: Boolean,
        required: true
    },

    ov: {
        type: Boolean,
        required: true
    },

    fs: {
        type: Boolean,
        required: true
    },

    to: {
        type: Boolean,
        required: true
    }
})

const mtrVerbose = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    "pcb-t": {
        type: Number,
        required: true
    },

    "mtr-t": {
        type: Number,
        required: true
    },

    ext: {
        type: Number,
        required: true
    },

    msg: {
        type: Number,
        required: true
    }
})

const bms0 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    vol: {
        type: Number,
        required: true
    }
})

const bms1 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    vol: {
        type: Number,
        required: true
    }
})

const bms2 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    vol: {
        type: Number,
        required: true
    }
})

const bms3 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    vol: {
        type: Number,
        required: true
    }
})

const bms4 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    vol: {
        type: Number,
        required: true
    }
})

const bms5 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    vol: {
        type: Number,
        required: true
    }
})

const bms6 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    vol: {
        type: Number,
        required: true
    }
})

const bms7 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    vol: {
        type: Number,
        required: true
    }
})

const bms8 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    vol: {
        type: Number,
        required: true
    }
})

const bms9 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    vol: {
        type: Number,
        required: true
    }
})


const bms10 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    vol: {
        type: Number,
        required: true
    }
})

const bms11 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    vol: {
        type: Number,
        required: true
    }
})

const bmsMsg1 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    cre: {
        type: Boolean,
        required: true
    },

    dre: {
        type: Boolean,
        required: true
    },

    charging: {
        type: Boolean,
        required: true
    },

    low: {
        type: Number,
        required: true
    },

    high: {
        type: Number,
        required: true
    },

    temp: {
        type: Number,
        required: true
    }
})

const bmsMsg2 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    psv: {
        type: Number,
        required: true
    },

    "avg-v": {
        type: Number,
        required: true
    },

    "avg-t": {
        type: Number,
        required: true
    },

    soc: {
        type: Number,
        required: true
    },

    aph: {
        type: Number,
        required: true
    }
})

const bmsMsg3 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    "av-open": {
        type: Number,
        required: true
    },

    cur: {
        type: Number,
        required: true
    }
})

const mppt1 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    bvlr: {
        type: Boolean,
        required: true
    },

    cur: {
        type: Number,
        required: true
    },

    ovt: {
        type: Boolean,
        required: true
    },

    "in-v": {
        type: Number,
        required: true
    },

    noc: {
        type: Boolean,
        required: true
    },

    undv: {
        type: Boolean,
        required: true
    }
})

const mppt2 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    bvlr: {
        type: Boolean,
        required: true
    },

    cur: {
        type: Number,
        required: true
    },

    ovt: {
        type: Boolean,
        required: true
    },

    "in-v": {
        type: Number,
        required: true
    },

    noc: {
        type: Boolean,
        required: true
    },

    undv: {
        type: Boolean,
        required: true
    }
})

const mppt3 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    bvlr: {
        type: Boolean,
        required: true
    },

    cur: {
        type: Number,
        required: true
    },

    ovt: {
        type: Boolean,
        required: true
    },

    "in-v": {
        type: Number,
        required: true
    },

    noc: {
        type: Boolean,
        required: true
    },

    undv: {
        type: Boolean,
        required: true
    }
})

const mppt4 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    bvlr: {
        type: Boolean,
        required: true
    },

    cur: {
        type: Number,
        required: true
    },

    ovt: {
        type: Boolean,
        required: true
    },

    "in-v": {
        type: Number,
        required: true
    },

    noc: {
        type: Boolean,
        required: true
    },

    undv: {
        type: Boolean,
        required: true
    }
})

const gpsLoc = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    lat: {
        type: Number,
        required: true
    },

    long: {
        type: Number,
        required: true
    }
})

const gpsInfo = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    hdop: {
        type: Number,
        required: true
    },

    sats: {
        type: Number,
        required: true
    },

    fix: {
        type: Number,
        required: true
    },

    crs: {
        type: Number,
        required: true
    },

    spd: {
        type: Number,
        required: true
    }
})


const zonnebootSchema = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true
    },

    deviceNumber : {
        type: Number,
        required : true
    },

    throttle: {
        type: throttle,
        default: undefined
    },

    phase: {
        type: phase,
        default: undefined
    },

    steer: {
        type: steer,
        default: undefined
    },

    "mtr-state": {
        type: mtrState,
        default: undefined
    },

    "mtr-speed": {
        type: mtrSpeed,
        default: undefined
    },

    "mtr-power": {
        type: mtrPower,
        default: undefined
    },

    "mtr-flags": {
        type: mtrFlags,
        default: undefined
    },

    "mtr-verbose": {
        type: mtrVerbose,
        default: undefined
    },

    "bms-0": {
        type: bms0,
        default: undefined
    },

    "bms-1": {
        type: bms1,
        default: undefined
    },

    "bms-2": {
        type: bms2,
        default: undefined
    },

    "bms-3": {
        type: bms3,
        default: undefined
    },

    "bms-4": {
        type: bms4,
        default: undefined
    },

    "bms-5": {
        type: bms5,
        default: undefined
    },

    "bms-6": {
        type: bms6,
        default: undefined
    },

    "bms-7": {
        type: bms7,
        default: undefined
    },

    "bms-8": {
        type: bms8,
        default: undefined
    },

    "bms-9": {
        type: bms9,
        default: undefined
    },

    "bms-10": {
        type: bms10,
        default: undefined
    },

    "bms-11": {
        type: bms11,
        default: undefined
    },

    "bms-msg-1": {
        type: bmsMsg1,
        default: undefined
    },

    "bms-msg-2": {
        type: bmsMsg2,
        default: undefined
    },

    "bms-msg-3": {
        type: bmsMsg3,
        default: undefined
    },

    "mppt-1": {
        type: mppt1,
        default: undefined
    },

    "mppt-2": {
        type: mppt2,
        default: undefined
    },

    "mppt-3": {
        type: mppt3,
        default: undefined
    },

    "mppt-4": {
        type: mppt4,
        default: undefined
    },

    "gps-loc": {
        type: gpsLoc,
        default: undefined
    },

    "gps-info": {
        type: gpsInfo,
        default: undefined
    }

})

module.exports = {
    Zonneboot: zonnebootSchema
};