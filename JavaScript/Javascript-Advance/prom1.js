var promise = new Promise(function(resolve,reject){
    const x="hello";
    const y="hello";
    if(x==y){
        resolve();
    }
    else{
        reject();
    }
});
promise.then(
    function(){
        console.log("Success");
    },
    function(){
        console.log("Fail");
    }
)
