function greeting(message){
    return (name)=>{
        return message+" "+name;
    }
}
var SayHi=greeting("Hi");
var SayHello=greeting("Hello");
console.log(SayHi('Ram'));
console.log(SayHello('Ved'));