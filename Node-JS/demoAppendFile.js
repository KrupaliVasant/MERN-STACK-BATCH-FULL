var fs = require('fs');

fs.writeFile('writeFile1.txt','Over write the text here',function(err){
    if(err) return console.log(err);
    console.log('Completed')
});  //over write the text to that file and if file is not available so that time it creates the file as well

fs.writeFile('writeFile5.txt','Over write the text here',function(err){
    if(err) return console.log(err);
    console.log('Completed')
});

// =================================================================================

fs.appendFile('writeFile2.txt','Append (Hello All) here',function(err){
    if (err) return console.log(err);
    console.log('Append txt to file. Saved');
})  //if file is not available so 'appendfile' creates that file and append the txt in that file   //if in that file there is already a txt so it appends the txt there

fs.appendFile('writeFile4.txt','creates the file and Append (Hello All) here',function(err){
    if (err) return console.log(err);
    console.log('create file and Append txt to file. Saved');
})

// ==================================================================================

var str = 'Good morning (add here)';
fs.open('writeFile3.txt','w',function(err,f){   //w - write, r- read, f- file name
    if(err){
        return console.log(err)
    }
    fs.writeFile(f,str,function(err){
        if(err) return console.log(err)
        console.log('data saved.')
    });
    console.log('File opend.')
})