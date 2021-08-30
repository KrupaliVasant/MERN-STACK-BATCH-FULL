// javascript set object
// A set is collection of unique values
// A set can hold value of any type

// create set 
const letters=new Set();
// add values to the set 
letters.add('a');
letters.add('b');
letters.add('c');
letters.add('d');
letters.add('a');
console.log("Length: "+ letters.size);
let isExist=letters.has('a');
console.log("Exist: "+isExist);
// letters.clear();  //clear all object


const numbers=new Set([1,2,3,4,5,6]);
numbers.add(7);
numbers.add(8);
numbers.add(2);
console.log("Numbers size: "+numbers.size);
// return all values from set
console.log("delete number: "+numbers.delete(5)) ;   //remove item from set
for(let k of numbers){
    console.log(k);
}