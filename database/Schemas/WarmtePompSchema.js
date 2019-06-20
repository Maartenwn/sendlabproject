var mongoose = require('mongoose');

const SendLabWarmtepompBinntenTemperatuur1 = new mongoose.Schema({
    timestamp: {
        type: Date,
        required: true,
    },

    sensorID: {
        type: Number,
        required: true,
    },

    temperatureValue: {
        type: Number,
        required: true,
    }
})

const SendLabWarmtepompBinntenTemperatuur2 = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true,
    },

    sensorID: {
        type: Number,
        required: true,
    },

    temperatureValue: {
        type: Number,
        required: true,
    }
})

const energieMeter = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true,
    },

    DSRMVersion: {
        type: Number,
        required: true
    },

    MeterTimeStamp: {
        type: String,
        required: true,
    },

    EquipmentIdentifier: {
        type: String,
        required: true,
    },

    TotalUsageTarif1: {
        type: Number,
        required: true,
    },

    TotalUsageTarif2: {
        type: Number,
        required: true,
    },

    TotalReturnedTarif1: {
        type: Number,
        required: true,
    },

    TotalReturnedTarif2: {
        type: Number,
        required: true,
    },

    ActualTarifIndicator: {
        type: Number,
        required: true,
    },

    ActualPowerUse: {
        type: Number,
        required: true,
    },

    ActualPowerReturned: {
        type: Number,
        required: true,
    },

    NumberOfPowerFailuresAnyPhase: {
        type: Number,
        required: true,
    },

    NumberOfLongPowerFailuresInAnyPhase: {
        type: Number,
        required: true,
    },

    PowerFailureLogs: {
        type: String,
        required: true,
    },

    L1VoltageSags: {
        type: Number,
        required: true,
    },

    L2VoltageSags: {
        type: Number,
        required: true,
    },

    L3VoltageSags: {
        type: Number,
        required: true,
    },

    L1VoltageSwells: {
        type: Number,
        required: true,
    },

    L2VoltageSwells: {
        type: Number,
        required: true,
    },

    L3VoltageSwells: {
        type: Number,
        required: true,
    },

    L1InstantaneousVoltage: {
        type: Number,
        required: true,
    },

    L2InstantaneousVoltage: {
        type: Number,
        required: true,
    },

    L3InstantaneousVoltage: {
        type: Number,
        required: true,
    },

    L1InstantaneousCurrent: {
        type: Number,
        required: true,
    },

    L2InstantaneousCurrent: {
        type: Number,
        required: true,
    },

    L3InstantaneousCurrent: {
        type: Number,
        required: true,
    },

    L1ActivePowerUse: {
        type: Number,
        required: true,
    },

    L2ActivePowerUse: {
        type: Number,
        required: true,
    },

    L3ActivePowerUse: {
        type: Number,
        required: true,
    },

    L1ActivePowerReturned: {
        type: Number,
        required: true,
    },

    L2ActivePowerReturned: {
        type: Number,
        required: true,
    },

    L3ActivePowerReturned: {
        type: Number,
        required: true,
    }
})

const Warmtemeter = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true,
    },

    ActualFlow: {
        type: Number,
        required: true,
    },

    TemperaturePoint1: {
        type: Number,
        required: true,
    },

    TemperaturePoint2: {
        type: Number,
        required: true,
    },

    TemperatureDifferential: {
        type: Number,
        required: true,
    },

    Pressure: {
        type: Number,
        required: true,
    },

    HeatEnergy: {
        type: Number,
        required: true,
    },

    CoolingEnergy: {
        type: Number,
        required: true,
    },

    Volume: {
        type: Number,
        required: true,
    },

    COP: {
        type: Number,
        required: true,
    },

    QpAvgTime: {
        type: Number,
        required: true,
    },

    Mass: {
        type: Number,
        required: true,
    }
})

/**
 * @swagger
 * definitions:
 *  Warmtepomp:
 *      properties:
 *          timestamp:
 *              description: "The time when the data was measured"
 *              type: String
 *          SendLabWarmtepompBinntenTemperatuur1:
 *              properties:
 *                  timestamp:
 *                      description: "The time when the data was measured"
 *                      type: String
 *                  sensorID:
 *                      type: Number
 *                      description: "The id of the sensor"
 *                  temperatureValue:
 *                      type: Number
 *                      description: "De gemeten temperatuur in °C"
 *          SendLabWarmtepompBinntenTemperatuur2:
 *              properties:
 *                  timestamp:
 *                      description: "The time when the data was measured"
 *                      type: String
 *                  sensorID:
 *                      type: Number
 *                      description: "The id of the sensor"
 *                  temperatureValue:
 *                      type: Number
 *                      description: "De gemeten temperatuur in °C"
 *          energiemeter:
 *              properties:
 *                  timestamp:
 *                      description: "The time when the data was measured"
 *                      type: String
 *                  DSRMVersion:
 *                      type: Number
 *                      description: "The version of the DSRM"
 *                  MeterTimeStamp:
 *                      type: String
 *                      description: "De timestamp van de meter"
 *                  EquipmentIdentifier:
 *                      type: String
 *                      description: "De identifier van de energiemeter"
 *                  TotalUsageTarif1:
 *                      type: Number
 *                      description: "Het totale verbruik van de Tarif in kWh"
 *                  TotalUsageTarif2:
 *                      type: Number
 *                      description: "Het totale verbruik van de Tarif in kWh"
 *                  TotalReturnedTarif1:
 *                      type: Number
 *                      description: "Het totaal terug verzonden door de Tarif in kWh"
 *                  TotalReturnedTarif2:
 *                      type: Number
 *                      description: "Het totaal terug verzonden door de Tarif in kWh"
 *                  ActualTarifIndicator:
 *                      type: Number
 *                      description: "Het actuele verbruik van de Tarif in kWh"
 *                  ActualPowerUse:
 *                      type: Number
 *                      description: "Het actuele verbruik in kW"
 *                  ActualPowerReturned:
 *                      type: Number
 *                      description: "Het actuele verbruik terug verzonden in kW"
 *                  NumberOfPowerFailuresAnyPhase:
 *                      type: Number
 *                      description: "De hoeveelheid power failures tijdens een fase"
 *                  NumberOfLongPowerFailuresInAnyPhase:
 *                      type: Number
 *                      description: "De hoeveelheid lange power failures tijdens een fase"
 *                  PowerFailureLogs:
 *                      type: String
 *                      description: "De log van de power failure"
 *                  L1VoltageSags:
 *                      type: Number
 *                      description: ""
 *                  L2VoltageSags:
 *                      type: Number
 *                      description: ""
 *                  L3VoltageSags:
 *                      type: Number
 *                      description: ""
 *                  L1VoltageSwells:
 *                      type: Number
 *                      description: ""
 *                  L2VoltageSwells:
 *                      type: Number
 *                      description: ""
 *                  L3VoltageSwells:
 *                      type: Number
 *                      description: ""
 *                  L1InstantaneousVoltage:
 *                      type: Number
 *                      description: ""
 *                  L2InstantaneousVoltage:
 *                      type: Number
 *                      description: ""
 *                  L3InstantaneousVoltage:
 *                      type: Number
 *                      description: ""
 *                  L1InstantaneousCurrent:
 *                      type: Number
 *                      description: ""
 *                  L2InstantaneousCurrent:
 *                      type: Number
 *                      description: ""
 *                  L3InstantaneousCurrent:
 *                      type: Number
 *                      description: ""
 *                  L1ActivePowerUse:
 *                      type: Number
 *                      description: "Het verbuik in fase 1 in kW"
 *                  L2ActivePowerUse:
 *                      type: Number
 *                      description: "Het verbuik in fase 2 in kW"
 *                  L3ActivePowerUse:
 *                      type: Number
 *                      description: "Het verbuik in fase 3 in kW"
 *                  L1ActivePowerReturned:
 *                      type: Number
 *                      description: "De oplevering in fase 1 in kW"
 *                  L2ActivePowerReturned:
 *                      type: Number
 *                      description: "De oplevering in fase 2 in kW"
 *                  L3ActivePowerReturned:
 *                      type: Number
 *                      description: "De oplevering in fase 3 in kW"
 *          Warmtemeter:
 *              properties:
 *                  timestamp:
 *                      description: "The time when the data was measured"
 *                      type: String
 *                  ActualFlow:
 *                      type: Number
 *                      description: "De actuale water flow door de meter in liter/uur"
 *                  TemperaturePoint1:
 *                      type: Number
 *                      description: "De temperatuur op punt 1 in °C"
 *                  TemperaturePoint2:
 *                      type: Number
 *                      description: "De temperatuur op punt 2 in °C"
 *                  TemperatureDifferential:
 *                      type: Number
 *                      description: "Het temperatuurs verschil tussen punt 1 en 2"
 *                  Pressure:
 *                      type: Number
 *                      description: "De druk in de warmtemeter in Bar"
 *                  HeatEnergy:
 *                      type: Number
 *                      description: "De warmte energie in kWh"
 *                  CoolingEnergy:
 *                      type: Number
 *                      description: "De koeling energie in kWh"
 *                  Volume:
 *                      type: Number
 *                      description: "Het volume van de warmtemeter in kubieke meter"
 *                  COP:
 *                      type: Number
 *                      description: ""
 *                  QPAvgTime:
 *                      type: Number
 *                      description: "De gemiddelde QP tijd in minuten"
 *                  Mass:
 *                      type: Number
 *                      description: "De massa van de inhoud van de warmtemeter in kilogram"  
 *          
 */

const warmtePompSchema = new mongoose.Schema({
    timestamp: {
        type: Number,
        required: true,
    },

    SendLabWarmtepompBinntenTemperatuur1: {
        type: SendLabWarmtepompBinntenTemperatuur1,
        default: undefined,
    },

    SendLabWarmtepompBinntenTemperatuur2: {
        type: SendLabWarmtepompBinntenTemperatuur2,
        default: undefined,
    },

    energyMeter: {
        type: energieMeter,
        default: undefined,
    },

    Warmtemeter: {
        type: Warmtemeter,
        default: undefined,
    }
})

module.exports = {
    WarmtePomp: warmtePompSchema
};