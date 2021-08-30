const orderStr=(str)=>{
     result = str.split('').sort().join('');
    return result;
}

orderStr('webmaster');
console.log("Input String: webmaster");
console.log("Output: "+result);