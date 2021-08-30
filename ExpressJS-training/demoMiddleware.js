var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});

app.use(function(req, res, next){
    console.log(req.method);
    next();
});

app.use(express.static('public'));
app.use('/images',express.static(__dirname+'/Images'));

// get method
app.get('/', function (req, res) {
    res.send("Hello Every one!!!")
});
// http://localhost:8081/

// get method
app.get('/abc', function (req, res) {
    res.sendFile(__dirname+"/public/index1.html");
});
// http://localhost:8081/abc

// pattern matching  start with 's' end eith 'e' '*' all charecters with 0
app.get('/s*e', function (req, res) {
    res.send('Pattern matching matches');
});  //se, s1e, sample, sfghvgbhe - success
//Sample1 it gives error bcoz it wants last letter as 'e'

app.get('/user', function (req, res) {
    myData = {
        fname: req.query.first_name,
        lname: req.query.last_name
    }
    // res.send('<p>User Name :' + req.que  ry['first_name'] + '</p><p>Last Name : ' + req.query['last_name'] + '</p>')
    res.end(JSON.stringify(myData));
});   //index1.js form run

app.post('/users', urlencodedParser ,function(req,res){
    // Prepare output in JSON formate
    responseData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(responseData);
    res.end(JSON.stringify(responseData));
});

app.put('/updateuser',function(req,res){
    res.send("Request for update");
});

app.delete('/deleteuser',function(req,res){
    res.send("Request for delete");
})

var server = app.listen(8081, function () {
    console.log('Server started..');
    console.log('At port no : ', server.address().port)
});

// in browser 
//localhost:8081
// run --- node filename

//  install n reserch it -- node-static