let arr=[1,2,3,4,5];
let result = arr.reduce((sum,current)=>sum+current,0)
console.log(result);


// ===reducer====
// let value=arr.reduce(function(accumulator,ite,index,array){
    // expression
// },[initial])

// accumulator -> is the result of the previous function call,equal to initial
// item -> item in the array
// index -> index of the array
// array -> is the array

// itaration===
// 0 1 1
// 1 2 3
// 3 3 6
// 6 4 10
// 10 5 15