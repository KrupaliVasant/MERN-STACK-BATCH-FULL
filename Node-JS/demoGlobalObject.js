//demo of global objects

console.log(__dirname);
console.log(__filename);

function sayHi (){
    console.log("Hi!!!");
}

setTimeout(sayHi, 2000);

function sayBye(){
    console.log("Bye!!!");
}

var timeout = setTimeout(sayBye,5000);
clearTimeout(timeout);  //cancel that action

console.warn("error occured");
console.time("loop here");

var num = 100;
while(num > 0){
    console.log(num);
    num--;
}
console.timeEnd("loop here");

console.log(process.argv[0]);

// run like this : node yourFilename.js(demoGlobalObject) Brillio Krupali Manager
process.argv.forEach(function(element, index, array){
    console.log(index+":"+element);
});

console.log(process.platform);
console.log(process.execPath);

console.log(process.memoryUsage());
console.log(process.version);
console.log(process.cwd());
