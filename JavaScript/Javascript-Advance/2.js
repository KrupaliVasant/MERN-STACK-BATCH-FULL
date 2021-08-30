function display(n){
    console.log(n);
}

// 1 way
// function calculator(n1,n2){
//     let sum=n1+n2;
//     return sum;
// }
// let result=calculator(3,4);
// display(result);


// 2 way
function calculator(n1,n2){
    let sum=n1+n2;
    display(sum);
}
calculator(4,6);
