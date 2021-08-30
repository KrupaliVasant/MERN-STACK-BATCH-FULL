// Buffers
//  Node provides Buffer class which provides instances to store raw data similar to an arrayof integers
// networking
var buf1 = new Buffer.alloc(10);
// var buf1 = new Buffer.allocUnsafe(10);
console.log('buf1: ' +buf1);
var myBuffer = Buffer.from([10,20,30,40,50]);

var buf2 = new Buffer([10,20,30,40,50]); //Buffer.from()
console.log('buf2: ' +buf2);

var buf3 = new Buffer("Sample data ", 'utf-8');
console.log('buf3: ' +buf3);

buf4 = new Buffer(256);
console.log('buf4: ' +buf4);

len = buf4.write("Hello !!!");
console.log('Octets written (len): '+ len);

buf = new Buffer(26);
for (var i= 0;i<26;i++){
    buf[i] = i+97;
}
console.log(buf.toString('ascii'));  //output: abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii',0,5));  //output: abcde
console.log(buf.toString('utf-8',0,5));  //output: abcde
console.log(buf.toString(undefined,0,5));  //encoding default to 'utf-8' , output: abcde

var json = buf4.toJSON();
console.log(json);

var bufferConcat = Buffer.concat([buf3,buf4]);
console.log("buffer3 concate: "+bufferConcat.toString());

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('XYZ');
var result = buffer1.compare(buffer2);

if(result < 0){
    console.log(buffer1 +" comes before "+ buffer2);
} else if(result === 0){
    console.log(buffer1 + " is same as " + buffer2);
} else{
    console.log(buffer1 + " comes after " + buffer2);
}

// copying
var buffer1 =new Buffer('welcome');
var buffer2 =new Buffer(7);
buffer1.copy(buffer2);
console.log("Buffer2 content: " + buffer2.toString());

// slicing a buffer
var buffer3 = buffer1.slice(0,3);
console.log("Buffer3 content: " + buffer3.toString());