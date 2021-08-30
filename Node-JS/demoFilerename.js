var fs = require('fs');

fs.rename('renameFile.txt','renameFile1.txt', function(err){
    if(err) return console.log(err);
    console.log('File renamed.')
})

//rename file from 'renameFile.txt' to 'renameFile1.txt'