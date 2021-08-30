var express = require('express');
var app = express();

// body-parser is for post method
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});

app.get('/', function(req,res){
    res.send("Hello!!!");
});

// get method
app.get('/getuser', function(req,res){
    myData = {
        code: req.query.user_code,
        name: req.query.user_name,
        phone: req.query.user_phone,
        address: req.query.user_address
    }
    console.log('GET data: ',myData);
    res.end(JSON.stringify(myData));
});

// POST create method
app.post('/postuser', urlencodedParser, function(req,res){
    resData = {
        user_code: req.body.user_code,
        user_name: req.body.user_name,
        user_phone: req.body.user_phone,
        user_address: req.body.user_address
    }
    console.log('POST data: ',resData);
    res.end(JSON.stringify(resData));
});

var server = app.listen(8000, function () {
    console.log('Server started..',server.address().port);
});