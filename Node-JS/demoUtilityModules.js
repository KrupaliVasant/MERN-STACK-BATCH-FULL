//  demo on utility modules

// os

var os = require('os');
var path = require('path');

console.log('Os type: ' + os.type());
console.log('Total memory : ' + os.totalmem);
console.log('Free memory : ' + os.freemem);
console.log('Platform : ' + os.platform);
console.log("Architecture: " + os.arch);

// resolve : entire path of file
console.log(path.resolve("Sample2.txt"));

console.log("Joining path : " + path.join("/public", "/Images"));

console.log("Extention of the file sample.txt ---> " + path.extname("sample.txt"));