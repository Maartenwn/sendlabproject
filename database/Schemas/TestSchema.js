var mongoose = require('mongoose');

const testData1 = new mongoose.Schema({
    timestamp: {
        type: String,
        default: undefined
    },

    testData1: {
        type: Number,
        required: true,
    }
});

const testData2 = new mongoose.Schema({
    timestamp: {
        type: String,
        default: undefined
    },

    testData2: {
        type: String,
        required: true,
    }
});

const testData3 = new mongoose.Schema({
    timestamp: {
        type: String,
        default: undefined
    },

    testData3: {
        type: Boolean,
        required: true,
    }
});

const testSchema = new mongoose.Schema({
    timestamp: {
        type: String,
        default: undefined
    },

    testData1: {
        type: testData1,
        default: undefined
    },

    testData2: {
        type: testData2,
        default: undefined
    },

    testData3: {
        type: testData3,
        default: undefined
    }
});

module.exports = {
    testdata: testSchema
};
