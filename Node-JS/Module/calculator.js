exports.add=(a,b)=>{
    return a+b;
}
exports.mul=(a,b)=>a*b;
exports.sub=(a,b)=>a-b;
exports.div=(a,b)=>{
    if(b==0){
        return 0;
    }
    else{
        return a/b;
    }
}

// to 6.js file