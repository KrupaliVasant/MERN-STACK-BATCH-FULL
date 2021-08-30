// ===map====
// it calls the function for each element in the array and returns the array of results.
let flower=['rose','lilly','Tulips'];
let result=flower.map(item=>item.length);
console.log(result);
 result=flower.map(item=>item.toUpperCase());
console.log(result);
 result=flower.map(item=>item.length>5);
console.log(result);