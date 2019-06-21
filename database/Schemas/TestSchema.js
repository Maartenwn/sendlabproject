var mongoose = require('mongoose');

const testData1 = new mongoose.Schema({
    timestamp: {
        type: Number,
        default: undefined
    },

    testData1: {
        type: Number,
        required: true,
    }
});

const testData2 = new mongoose.Schema({
    timestamp: {
        type: Number,
        default: undefined
    },

    testData2: {
        type: String,
        required: true,
    }
});

const testData3 = new mongoose.Schema({
    timestamp: {
        type: Number,
        default: undefined
    },

    testData3: {
        type: Boolean,
        required: true,
    }
});

const testData4 = new mongoose.Schema({
    timestamp: {
        type: Number,
        default: undefined
    },

    testData4: {
        type: Number,
        required: true,
    }
});

const testData5 = new mongoose.Schema({
    timestamp: {
        type: Number,
        default: undefined
    },

    testData5: {
        type: Number,
        required: true,
    }
});

const testData6 = new mongoose.Schema({
    timestamp: {
        type: Number,
        default: undefined
    },

    testData6: {
        type: Number,
        required: true,
    }
});

const testData7 = new mongoose.Schema({
    timestamp: {
        type: Number,
        default: undefined
    },

    testData7: {
        type: Number,
        required: true,
    }
});

const testData8 = new mongoose.Schema({
    timestamp: {
        type: Number,
        default: undefined
    },

    testData8: {
        type: Number,
        required: true,
    }
});

const testData9 = new mongoose.Schema({
    timestamp: {
        type: Number,
        default: undefined
    },

    testData9: {
        type: Number,
        required: true,
    }
});

const testData10 = new mongoose.Schema({
    timestamp: {
        type: Number,
        default: undefined
    },

    testData10: {
        type: Number,
        required: true,
    }
});

const testData11 = new mongoose.Schema({
    timestamp: {
        type: Number,
        default: undefined
    },

    testData11: {
        type: Number,
        required: true,
    }
});

const testData12 = new mongoose.Schema({
    timestamp: {
        type: Number,
        default: undefined
    },

    testData12: {
        type: Number,
        required: true,
    }
});

const testData13 = new mongoose.Schema({
    timestamp: {
        type: Number,
        default: undefined
    },

    testData13: {
        type: Number,
        required: true,
    }
});

const testData14 = new mongoose.Schema({
    timestamp: {
        type: Number,
        default: undefined
    },

    testData14: {
        type: Number,
        required: true,
    }
});

const testData15 = new mongoose.Schema({
    timestamp: {
        type: Number,
        default: undefined
    },

    testData15: {
        type: Number,
        required: true,
    }
});

const testData16 = new mongoose.Schema({
    timestamp: {
        type: Number,
        default: undefined
    },

    testData16: {
        type: Number,
        required: true,
    }
});

const testData17 = new mongoose.Schema({
    timestamp: {
        type: Number,
        default: undefined
    },

    testData17: {
        type: Number,
        required: true,
    }
});

const testSchema = new mongoose.Schema({
    deviceNumber: {
        type: Number,
        default: undefined
    },

    timestamp: {
        type: Number,
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

    testData4: {
        type: testData4,
        default: undefined
    },

    testData5: {
        type: testData5,
        default: undefined
    },

    testData6: {
        type: testData6,
        default: undefined
    },

    testData7: {
        type: testData7,
        default: undefined
    },

    testData8: {
        type: testData8,
        default: undefined
    },

    testData9: {
        type: testData9,
        default: undefined
    },

    testData10: {
        type: testData10,
        default: undefined
    },

    testData11: {
        type: testData11,
        default: undefined
    },

    testData12: {
        type: testData12,
        default: undefined
    },

    testData13: {
        type: testData13,
        default: undefined
    },

    testData14: {
        type: testData14,
        default: undefined
    },

    testData15: {
        type: testData15,
        default: undefined
    },

    testData16: {
        type: testData16,
        default: undefined
    },

    testData17: {
        type: testData17,
        default: undefined
    },

    testData3: {
        type: testData3,
        default: undefined
    }
});

module.exports = {
    TestData: testSchema
};
