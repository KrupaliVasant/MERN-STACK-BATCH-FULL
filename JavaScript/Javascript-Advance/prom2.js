var promise=new Promise((resolve,reject)=>{
    let result = false;
    if(result){
        resolve('Hello guys..')
    }
    else{
        reject("Sometime...");
    }
});
promise.then((successmsg)=>
console.log(successmsg),(errmsg)=>console.log(errmsg));