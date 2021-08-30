var express = require('express');
var app = express();
app.use(express.static('public'));

// get method
app.get('/', function (req, res) {
    res.send("Hello Every one!!!")
});

// get method
app.get('/abc', function (req, res) {
    res.sendFile(__dirname+"/"+"index1.html");
});

app.get('/user', function (req, res) {
    myData = {
        fname: req.query.first_name,
        lname: req.query.last_name
    }
    // res.send('<p>User Name :' + req.que  ry['first_name'] + '</p><p>Last Name : ' + req.query['last_name'] + '</p>')
    res.end(JSON.stringify(myData));
});   //index1.js form run

var server = app.listen(8081, function () {
    console.log('Server started..');
    console.log('At port no : ', server.address().port)
});

// in browser 
//localhost:8081
// run --- node filename