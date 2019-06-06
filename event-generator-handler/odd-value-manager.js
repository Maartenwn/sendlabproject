const fs = require('fs');
var Ajv = require('ajv');
var ajv = new Ajv({
    "verbose":true
});
var callback;

const initOddValueManager = (callbackEvent)=>{
    callback = callbackEvent;
}

var schemas = {}
const checkSchema  = (schema,data,identifier,place) =>{
    var validate = schemas[schema];
    if(validate){
        var valid = validate(data);
        if (!valid){
            let errors = validate.errors;

            errors.forEach(error => {
                let keys = error.dataPath.split('.');
                callback({
                    type: "value-odd",
                    message: identifier + " |"+ error.keyword +"| " + error.dataPath + " " + error.message + ", value = " + error['data']
                },identifier);
            });
        }
    } 
}

let errorMessages = [];

const checkForOddValue = (data,identifier,isBuffer) =>{
    let topId = identifier.split('-')[0];
    try {
        if(isBuffer){
            let keys = Object.keys(data.data);
            keys.forEach(key => {
                let schemeName = topId + "/" + key
                if(!schemas[schemeName]){
                    let schema = getschema("./schemas/" + schemeName + ".json",schemeName,identifier);
                }
                data.data[key].forEach(value => {
                    delete value.timestamp;
                    checkSchema(schemeName,value,identifier,"");
                });
            });
        }else{
            let schema = getschema("./schemas/" + topId + "/" + topId +  ".json",topId,identifier);
            checkSchema(topId,data.data,identifier,"");
        }
    } catch (error) {
        if(!errorMessages.includes(error.message)){
            errorMessages.push(error.message);

            callback({
                type: "undefined-error",
                message: "Odd-value-manager: " + error.message
            },identifier);
        }
        console.error(error.message);
    }
}

const getschema = (s,schemeName,identifier)=>{
    try {
         let schema = require(s);
         schemas[schemeName] = ajv.compile(schema);
    } catch (error){
        if(!errorMessages.includes(error.message)){
            errorMessages.push(error.message);
            console.error(error.message);

            callback({
                type: "undefined-error",
                message: "Odd-value-manager: " + error.message
            },identifier);
        }
    }
}
module.exports = {
    initOddValueManager,
    checkForOddValue
}