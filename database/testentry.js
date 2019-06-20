const database = require('./api.js');

var saveData = database.saveData;
var getCurrentData = database.getCurrentData;
var getHistoricData = database.getHistoricData;

var i = 0;
for (i; i < 10; i++) {
    var testData = {
        "identifier": "test_device-001",
        "timestamp": Date.now(),
        "data": {
            "testData1": {
                "timestamp": new Date(Date.now() - 60 * 60 * 1000 * i),
                "testData1": i
            }
        }
    }
    saveData(testData);

    var testData2 = {
        "identifier": "test_device-001",
        "timestamp": Date.now(),
        "data": {
            "testData2": {
                "timestamp": new Date(Date.now() - 60 * 60 * 1000 * i),
                "testData2": `${i}` + "test"
            }
        }
    }
    saveData(testData2);

    var testData3 = {
        "identifier": "test_device-001",
        "timestamp": Date.now(),
        "data": {
            "testData3": {
                "timestamp": new Date(Date.now() - 60 * 60 * 1000 * i),
                "testData3": true
            }
        }
    }
    saveData(testData3);
}

//console.log(testData.identifier)

//console.log(saveData(testData));

//getHistoricData("test_device-001/testData1", new Date(Date.now() - 24 * 60 * 60 * 1000), (Date.now())).then(data => console.log(data));

//getHistoricData("test_device-001", new Date(Date.now() - 3*24 * 60 * 60 * 1000), (Date.now())).then(data => console.log(data[0].testData3));

//getCurrentData("test_device-001/testData3").then(data => console.log(data));
//getCurrentData("test_device-001").then(data => console.log(data));
