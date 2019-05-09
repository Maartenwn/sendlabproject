var express = require('express');
var parser = require('body-parser');
var router = require('./router.js');

console.log("Starting...");

let isTesting = true;

var app = express();
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.all('*',(req,res,next)=>{
    let typeKey = req.headers.authorization.split(' ')[0];
    let access_token = req.headers.authorization.split(' ')[1];

    if(typeKey == "bearer" && access_token == "test" | isTesting){
        next();
    } else res.status(401).send("Unauthorized")
})
app.use('/IoT/api',router);

app.listen(23450,function(){
    console.log("server started");
});