const database = require('./api.js');

var saveData = database.saveData;
var getCurrentData = database.getCurrentData;
var getHistoricData = database.getHistoricData;

// var i = 0;
// for (i; i < 2000; i++) {
//     var testData = {
//         "identifier": "test_device|001",
//         "timestamp": Date.now(),
//         "data": {
//             "testData1": {
//                 "timestamp": new Date(Date.now() - 60 * 60 * 1000),
//                 "testData1": i
//             }
//         }
//     }
//     saveData(testData);

//     var testData2 = {
//         "identifier": "test_device|001",
//         "timestamp": Date.now(),
//         "data": {
//             "testData2": {
//                 "timestamp": new Date(Date.now() - 60 * 60 * 1000),
//                 "testData2": `${i}` + "test"
//             }
//         }
//     }
//     saveData(testData2);

//     var testData3 = {
//         "identifier": "test_device|001",
//         "timestamp": Date.now(),
//         "data": {
//             "testData3": {
//                 "timestamp": new Date(Date.now() - 60 * 60 * 1000),
//                 "testData3": true
//             }
//         }
//     }
//     saveData(testData3);

//     var testData4 = {
//         "identifier": "test_device|001",
//         "timestamp": Date.now(),
//         "data": {
//             "testData4": {
//                 "timestamp": new Date(Date.now() - 60 * 60 * 1000),
//                 "testData4": i
//             }
//         }
//     }
//     saveData(testData4);


//     var testData5 = {
//         "identifier": "test_device|001",
//         "timestamp": Date.now(),
//         "data": {
//             "testData5": {
//                 "timestamp": new Date(Date.now() - 60 * 60 * 1000),
//                 "testData5": i
//             }
//         }
//     }
//     saveData(testData5);

//     var testData6 = {
//         "identifier": "test_device|001",
//         "timestamp": Date.now(),
//         "data": {
//             "testData6": {
//                 "timestamp": new Date(Date.now() - 60 * 60 * 1000),
//                 "testData6": i
//             }
//         }
//     }
//     saveData(testData6);

//     var testData7 = {
//         "identifier": "test_device|001",
//         "timestamp": Date.now(),
//         "data": {
//             "testData7": {
//                 "timestamp": new Date(Date.now() - 60 * 60 * 1000),
//                 "testData7": i
//             }
//         }
//     }
//     saveData(testData7);

//     var testData8 = {
//         "identifier": "test_device|001",
//         "timestamp": Date.now(),
//         "data": {
//             "testData8": {
//                 "timestamp": new Date(Date.now() - 60 * 60 * 1000),
//                 "testData8": i
//             }
//         }
//     }
//     saveData(testData8);

//     var testData9 = {
//         "identifier": "test_device|001",
//         "timestamp": Date.now(),
//         "data": {
//             "testData9": {
//                 "timestamp": new Date(Date.now() - 60 * 60 * 1000),
//                 "testData9": i
//             }
//         }
//     }
//     saveData(testData9);

//     var testData10 = {
//         "identifier": "test_device|001",
//         "timestamp": Date.now(),
//         "data": {
//             "testData10": {
//                 "timestamp": new Date(Date.now() - 60 * 60 * 1000),
//                 "testData10": i
//             }
//         }
//     }
//     saveData(testData10);

//     var testData11 = {
//         "identifier": "test_device|001",
//         "timestamp": Date.now(),
//         "data": {
//             "testData11": {
//                 "timestamp": new Date(Date.now() - 60 * 60 * 1000),
//                 "testData11": i
//             }
//         }
//     }
//     saveData(testData11);

//     var testData12 = {
//         "identifier": "test_device|001",
//         "timestamp": Date.now(),
//         "data": {
//             "testData12": {
//                 "timestamp": new Date(Date.now() - 60 * 60 * 1000),
//                 "testData12": i
//             }
//         }
//     }
//     saveData(testData12);

//     var testData13 = {
//         "identifier": "test_device|001",
//         "timestamp": Date.now(),
//         "data": {
//             "testData13": {
//                 "timestamp": new Date(Date.now() - 60 * 60 * 1000),
//                 "testData13": i
//             }
//         }
//     }
//     saveData(testData13);

//     var testData14 = {
//         "identifier": "test_device|001",
//         "timestamp": Date.now(),
//         "data": {
//             "testData14": {
//                 "timestamp": new Date(Date.now() - 60 * 60 * 1000),
//                 "testData14": i
//             }
//         }
//     }
//     saveData(testData14);

//     var testData15 = {
//         "identifier": "test_device|001",
//         "timestamp": Date.now(),
//         "data": {
//             "testData15": {
//                 "timestamp": new Date(Date.now() - 60 * 60 * 1000),
//                 "testData15": i
//             }
//         }
//     }
//     saveData(testData15);

//     var testData16 = {
//         "identifier": "test_device|001",
//         "timestamp": Date.now(),
//         "data": {
//             "testData16": {
//                 "timestamp": new Date(Date.now() - 60 * 60 * 1000),
//                 "testData16": i
//             }
//         }
//     }
//     saveData(testData16);

//     var testData17 = {
//         "identifier": "test_device|001",
//         "timestamp": Date.now(),
//         "data": {
//             "testData17": {
//                 "timestamp": new Date(Date.now() - 60 * 60 * 1000),
//                 "testData17": i
//             }
//         }
//     }
//     saveData(testData17);

// }

// console.log("done");

// var startTime, endTime;

function start() {
    startTime = new Date();
};

function end() {
    endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;

    // get seconds 
    var seconds = Math.round(timeDiff);
    console.log(seconds + " seconds");
}



//console.log(testData.identifier)

//console.log(saveData(testData));

//getHistoricData("test_device|001|testData1", new Date(Date.now() - 24 * 60 * 60 * 1000), (Date.now())).then(data => console.log(data));
//start();
//start();
//getHistoricData("test_device|001", new Date(Date.now() - 24 * 60 * 60 * 1000), (Date.now())).then(data => {
//    console.log(data);
    //end();
//});

//getCurrentData("test_device|001|testData3").then(data => console.log(data));
//getCurrentData("test_device|001").then(data => {
//    console.log(data);
//});

