// Create own server in Node Js

const http = require('http');  //add http package to js file
http.createServer(function(req,res){
    // send HTTP header
    // HTTP status:200:OK
    // Content type:text/plain
    res.writeHead(200,{'Content-Type':'text/plain'});
    // send response body as "hello world"
    res.end("Hello World");
}).listen(8000);
// console will print the message
console.log('Server running at http://127.0.0.1:8000');