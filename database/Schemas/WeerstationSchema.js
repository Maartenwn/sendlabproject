var mongoose = require('mongoose')

/**
 * @swagger
 * definitions:
 *  AvansTIWeerstation:
 *      properties:
 *          StationID:
 *              type: Number
 *              description: "het ID van het weerstation"
 *          Tijdstip:
 *              type: Date
 *              description: "De DateTimestamp wanneer de data gemeten is"
 *          Luchtdruk:
 *              type: Number
 *              description: "De gemeten luchtdruk in Pascal"
 *          BinnenLuchtvochtigheid:
 *              type: Number
 *              description: "De gemeten luchtvochtigheid binnen in %"
 *          BinnenTemperatuur:
 *              type: Number
 *              description: "De gemeten temperatuur binnen (F * 10)"
 *          WindSnelheid:
 *              type: Number
 *              description: "De gemeten windsnelheid in Windcups"
 *          WindSnelheidGemiddeld:
 *              type: Number
 *              description: "De gemiddelde windsnelheid in Windcups"
 *          WindRichting:
 *              type: Number
 *              description: "De gemeten windrichting in Graden"
 *          BuitenLuchtvochtigheid:
 *              type: Number
 *              description: "De gemeten luchtvochtigheid buiten in %"
 *          BuitenTemperatuur:
 *              type: Number
 *              description: "De gemeten temperatuur buiten (F * 10)"
 *          RegenSnelheid:
 *              type: Number
 *              description: "De gemeten regen snelheid in mm/uur"
 *          UVIndex:
 *              type: Number
 *              description: "De gemeten UVIndex"
 *          ZonIntensiteit:
 *              type: Number
 *              description: "De gemeten zon intensiteit"
 *          BatterijLevelBuiten:
 *              type: Number
 *              description: "Het batterij niveau buiten in Volt"
 *          BatterijLevel:
 *              type: Number
 *              description: "Het batterij niveau in Volt"
 *          VoorspellingsIcoon:
 *              type: String
 *              description: "Het icoon voor de weersvoorspelling"
 *          ZonsOpkomst:
 *              type: Number
 *              description: "Het geschatte tijdstip wanneer de zon opkomt vb: (1012 === 10:12)"
 *          ZonsOndergang:
 *              type: Number
 *              description: "Het geschatte tijdstip wanneer de zon ondergaat vb: (1012 === 10:12)"
 *  
 */
const AvansTIWeerstation = new mongoose.Schema({
    deviceNumber : {
        type : Number,
        required: true,
    },
    
    StationID: {
        type: String,
        required: true,
    },

    Tijdstip: {
        type: Number,
        required: true,
    },

    Luchtdruk: {
        type: Number,
        required: true,
    },

    BinnenLuchtvochtigheid: {
        type: Number,
        required: true,
    },

    BinnenTemperatuur: {
        type: Number,
        required: true,
    },

    WindSnelheid: {
        type: Number,
        required: true,
    },

    WindSnelheidGemiddeld: {
        type: Number,
        required: true,
    },

    WindRichting: {
        type: Number,
        required: true,
    },

    BuitenLuchtvochtigheid: {
        type: Number,
        required: true,
    },

    BuitenTemperatuur: {
        type: Number,
        required: true,
    },

    RegenSnelheid: {
        type: Number,
        required: true,
    },

    UVIndex: {
        type: Number,
        required: true,
    },

    ZonIntensiteit: {
        type: Number,
        required: true,
    },

    BatterijLevelBuiten: {
        type: Number,
        required: true,
    },

    BatterijLevel: {
        type: Number,
        required: true,
    },

    VoorspellingsIcoon: {
        type: String,
        required: true
    },

    ZonsOpkomst: {
        type: Number,
        required: true,
    },

    ZonsOndergang: {
        type: Number,
        required: true,
    }
})

module.exports = {
    Weerstation: AvansTIWeerstation
}