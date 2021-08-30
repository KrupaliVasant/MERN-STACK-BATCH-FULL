const fs=require('fs');
let data=fs.readFileSync("./1.txt");
console.log(data.toString());
console.log('Program ended');