const test = require('./api.js');

var saveData = test.saveData;
var getCurrentData = test.getCurrentData;

var testData = {
    "identifier": "Zonneboot",
    "data": {
        "mtr-state": {
            "timestamp": "YEET",
            "state": 5,
            "enable": true,
            "ready": true,
            "error": false
        }
    }
}

//console.log(testData.identifier)

//saveData(testData);

getCurrentData("Zonneboot/mtr-state")