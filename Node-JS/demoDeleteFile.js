var fs = require('fs');
 fs.unlink('deleteFile.txt',function(err){   //delete file 'deleteFile.txt'
     if(err) return console.log(err);
     console.log('File deleted.')
 })