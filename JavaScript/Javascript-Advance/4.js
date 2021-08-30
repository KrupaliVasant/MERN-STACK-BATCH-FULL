function f(){
    console.log("hello callback");
}
// setTimeout(f,3000);
setTimeout(()=>{
    console.log("Hello callback");
},3000);
