var fs = require('fs');
var someData = 'Welcome to the Node Js Stream';

// Create a writable stream
var writeStream = fs.createWriteStream('Sample2.txt');

// Write the data to stream with encoding to be UTF8
writeStream.write(someData,'utf-8');

// Mark the end of file
writeStream.end();

// Handle stream events => finish, and error
writeStream.on('finish', function(){
    console.log('Write completed...');
});

writeStream.on('error',function(err){
    console.log(err.stack);
});

// console.log('Program ended..');