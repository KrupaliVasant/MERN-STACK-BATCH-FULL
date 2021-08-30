const swapArray =(arr) =>{
    [arr[0],arr[arr.length - 1]] = [arr[arr.length - 1],arr[0]];
    return arr;
}

console.log(swapArray([1,2,3,4]));
console.log(swapArray([0,1,2]))
console.log(swapArray([7]))