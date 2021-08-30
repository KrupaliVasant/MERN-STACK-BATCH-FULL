const calc=require('./Module/calculator');
const hello=require('./Module/hello');

console.log('Add',calc.add(2,2));
console.log('Mul',calc.mul(10,2));
console.log('Div',calc.div(6,2));
console.log('Sub',calc.sub(2,2));
console.log(hello.Greet("Ram"));