// Stream : Readable Streams, Writeable streams, Duplex stream (both read and write), tranform
// Streams are instance of Event Emitter, deals with 4 types of events
// data: event, if some data exists to read
// end: event,reached the end of the file
// error: event, errors while reading/writing
// finish: event, flush the underlying system

var fs = require('fs');
var str = "";
// Create readable stream
var readerStream = fs.createReadStream('sample.txt');

// Set the encoding to be UTF8
readerStream.setEncoding('utf-8');

// Handle stream event -->data, end and error
readerStream.on('data', function (chunk) {
    str += chunk;
});

readerStream.on('end', function () {
    console.log(str);
});

readerStream.on('error', function (err) {
    console.log(err.stack);
});

console.log("Program ended.");