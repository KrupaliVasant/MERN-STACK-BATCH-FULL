let mypromise= new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("Success")},3000);
});
mypromise.then((value)=>console.log(value));