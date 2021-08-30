var http = require('http');
var url = require('url');

// create a server object
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });  //Add an HTTP, if the response from the HTTP server is supported to be displayed as
    res.write(req.url)

    var qstr = url.parse(req.url, true).query;
    var txt = "<br/> Name: " + qstr.name + "<br/> Age: " + qstr.age + "<br/> City: " + qstr.city;
    res.end(txt);
}).listen(8080);  //server object listen on port 8080
console.log("Server started...");

// node filename to run it

// in brower
// http://localhost:8080?name="Krupali"&age=10&city="Pune"

// http://localhost:8080/?name=%22Krupali%22&age=30&city=%22Pune%22