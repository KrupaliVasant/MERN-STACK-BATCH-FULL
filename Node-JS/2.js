var http = require('http');
http.createServer((req,res)=>{
    res.write("Good Morning");
    res.end();
}).listen(8000);
console.log("server is running")
