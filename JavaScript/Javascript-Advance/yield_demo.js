function* collection(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
for(var k of collection()){
    console.log(k)
}
var gen = collection();
// console.log(gen.next().value)
// console.log(gen.next().value)

for(let i=0;i<4;i++){
    console.log(gen.next().value)
}