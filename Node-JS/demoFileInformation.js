var fs = require('fs');
console.log('Going to get file information.');
fs.stat('sample1.txt',function(err,stats){
    if(err){
        return console.log(err);
    }
    console.log(stats);
    console.log('Success');

    console.log('idFile :' +stats.isFile());
    console.log('isDirectory : ' + stats.isDirectory());
    console.log("Size : "+ stats.size);
});