// Generator demo
let arr = ['a','b','c','d']
function* generator(arr){
    let i =0;
    while(i<arr.length){
        yield arr[i++]
    }
}

const v=generator(arr);
console.log(v.next());