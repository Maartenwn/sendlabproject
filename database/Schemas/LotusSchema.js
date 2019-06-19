var mongoose = require('mongoose');

/**
 * @swagger
 * definitions:
 *  lotus:
 *      required:
 *          - timestamp
 *          - v_min
 *          - v_max
 *          - v_avg
 *          - i_batt
 *          - i_motor
 *          - i_acc
 *          - t_min
 *          - t_max
 *          - t_avg
 *          - t_motor
 *          - t_peu
 *          - soc
 *          - motor
 *          - v_line1
 *          - v_line2
 *          - v_line3
 *          - i_line1
 *          - i_line2
 *          - i_line3
 *          - p_line
 *          - v_aps
 *          - v_setpoint
 *          - i_setpoint
 *          - error
 *          - latitude
 *          - longitude
 *          - altitude
 *      properties:
 *          timestamp:
 *              description: "The time when the data was measured"
 *              type: String
 *          v_min:
 *              description: "Laagst gemeten celspanning (in V) gemeten over alle cellen"
 *              type: Number
 *              min: 0
 *              max: 5
 *          v_max:
 *              description: "Hoogst gemeten celspanning (in V) gemeten over alle cellen"
 *              type: Number
 *              min: 0
 *              max: 5
 *          v_avg:
 *              description: "Gemiddelde van de celspanningen (in V) gemeten over alle cellen"
 *              type: Number
 *              min: 0
 *              max: 5
 *          i_batt:
 *              description: "Stroom (in A) die door het totale accupakket geleverd of verbruikt wordt"
 *              type: Number
 *              min: -1000
 *              max: 1000
 *          i_motor:
 *              description: "Stroom (in A) die door de motor verbruikt of geleverd wordt"
 *              type: Number
 *              min: -1000
 *              max: 1000
 *          i_acc:
 *              description: "Stroom (in A) die door accessoires verbruikt wordt"
 *              type: Number
 *              min: 0
 *              max: 15
 *          t_min:
 *              description: "Laagst gemeten celtemperatuur (in ºC) gemeten over alle cellen"
 *              type: Number
 *              min: -100
 *              max: 200
 *          t_max:
 *              description: "Hoogst gemeten celtemperatuur (in ºC) gemeten over alle cellen"
 *              type: Number
 *              min: -100
 *              max: 200
 *          t_avg:
 *              description: "Gemiddelde van de celtemperaturen (in ºC) gemeten over alle cellen"
 *              type: Number
 *              min: -100
 *              max: 200
 *          t_motor:
 *              description: "Temperatuur (in ºC) van de motor"
 *              type: Number
 *              min: -100
 *              max: 200
 *          t_peu:
 *              description: "Temperatuur (in ºC) van de PEU"
 *              type: Number
 *              min: -100
 *              max: 200
 *          soc:
 *              description: "State of charge (in %)"
 *              type: Number
 *              min: 0
 *              max: 100
 *          motor:
 *              description: "Het toerental van de motor (in rpm)"
 *              type: Number
 *              min: 0
 *              max: 35000
 *          v_line1:
 *              description: "Spanning op fase L1 (in V)"
 *              type: Number
 *              min: 0
 *              max: 253
 *          v_line2:
 *              description: "Spanning op fase L2 (in V)"
 *              type: Number
 *              min: 0
 *              max: 253
 *          v_line3:
 *              description: "Spanning op fase L3 (in V)"
 *              type: Number
 *              min: 0
 *              max: 253
 *          i_line1:
 *              description: "Laadstroom door fase L1 (in A)"
 *              type: Number
 *              min: 0
 *              max: 60
 *          i_line2:
 *              description: "Laadstroom door fase L2 (in A)"
 *              type: Number
 *              min: 0
 *              max: 60
 *          i_line3:
 *              description: "Laadstroom door fase L3 (in A)"
 *              type: Number
 *              min: 0
 *              max: 60
 *          p_line:
 *              description: "Werkelijk vermogen over de netverbinding (in kW)"
 *              type: Number
 *              min: 0
 *              max: 150000
 *          v_aps:
 *              description: "Voltage van de aps-batterij (in V)"
 *              type: Number
 *              min: 0
 *              max: 24
 *          v_setpoint:
 *              description: "Ingestelde max. spanning via selector"
 *              type: Number
 *              min: 0
 *              max: 24
 *          i_setpoint:
 *              description: "ingestelde laadstroom via selector, FF = RS-232 gestuurd laden"
 *              type: Number
 *              min: 0
 *              max: 16
 *          error:
 *              type: Number
 *              min: 0
 *              max: 23
 *              description: |
 *                  0 geen fout, laden ok
 *                  1 laadsessie afgerond
 *                  2 laadsessie handmatig gestopt, via UI
 *                  3 netspanning weggevallen
 *                  4 laadsessie start time-out
 *                  5 HVDC isolatie test mislukt
 *                  6 algemene stop laadsessie, reden onbekend
 *                  7 netfrequentie te hoog
 *                  8 netfrequentie te laag
 *                  9 RESERVE
 *                  10 RESERVE
 *                  11 RESERVE
 *                  12 HVDC te hoog op de inverter
 *                  13 HVDC te laag op de inverter
 *                  14 RESERVE
 *                  15 netspanning te hoog op inverter
 *                  16 RESERVE
 *                  17 te veel herstart pogingen
 *                  18 RESERVE
 *                  19 celltemperatuur overschreden
 *                  20 cellspanning overschreden
 *                  21 HVDC te hoog volgens BMS
 *                  22 BMS communicatiefout
 *                  23 celtemperatuur onderschreden
 *          latitude:
 *              type: Number
 *              description: "DDmm.mmmm"
 *              min: 0
 *              max: 9000
 *          longitude:
 *              type: Number
 *              description: "DDDmm.mmmm"
 *              min: 0
 *              max: 18000
 *          altitude:
 *              type: Number
 *              description: "meter"
 *              min: -500
 *              max: 6000
 */

const lotusSchema = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true,
    },

    v_min: {
        type: Number,
        default: undefined,
        min: 0,
        max: 5
    },

    v_max: {
        type: Number,
        default: undefined,
        min: 0,
        max: 5
    },

    v_avg: {
        type: Number,
        default: undefined,
        min: 0,
        max: 5
    },

    i_batt: {
        type: Number,
        default: undefined,
        min: -1000,
        max: 1000,
    },

    i_motor: {
        type: Number,
        default: undefined,
        min: -1000,
        max: 1000
    },

    i_acc: {
        type: Number,
        default: undefined,
        min: 0,
        max: 15
    },

    t_min: {
        type: Number,
        default: undefined,
        min: -100,
        max: 200,
    },

    t_max: {
        type: Number,
        default: undefined,
        min: -100,
        max: 200
    },

    t_avg: {
        type: Number,
        default: undefined,
        min: -100,
        max: 200
    },

    t_motor: {
        type: Number,
        default: undefined,
        min: -100,
        max: 200,
    },

    t_peu: {
        type: Number,
        default: undefined,
        min: -100,
        max: 200,
    },

    soc: {
        type: Number,
        default: undefined,
        min: 0,
        max: 100,
    },

    motor: {
        type: Number,
        default: undefined,
        min: 0,
        max: 35000,
    },

    v_line1: {
        type: Number,
        default: undefined,
        min: 0,
        max: 253
    },

    v_line2: {
        type: Number,
        default: undefined,
        min: 0,
        max: 253,
    },

    v_line3: {
        type: Number,
        default: undefined,
        min: 0,
        max: 253,
    },

    i_line1: {
        type: Number,
        default: undefined,
        min: 0,
        max: 60,
    },

    i_line2: {
        type: Number,
        default: undefined,
        min: 0,
        max: 60,
    },

    i_line3: {
        type: Number,
        default: undefined,
        min: 0,
        max: 60,
    },

    p_line: {
        type: Number,
        default: undefined,
        min: 0,
        max: 150000
    },

    v_aps: {
        type: Number,
        default: undefined,
        min: 0,
        max: 24,
    },

    v_setpoint: {
        type: Number,
        default: undefined,
        min: 0,
        max: 24
    },

    i_setpoint: {
        type: Number,
        default: undefined,
        min: 0,
        max: 16
    },

    error: {
        type: Number,
        default: undefined,
        min: 0,
        max: 23,
    },

    latitude: {
        type: Number,
        default: undefined,
        min: 0,
        max: 9000,
    },

    longitude: {
        type: Number,
        default: undefined,
        min: 0,
        max: 18000,
    },

    altitude: {
        type: Number,
        default: undefined,
        min: -500,
        max: 6000,
    }
})

module.exports = {
    Lotus: lotusSchema
};