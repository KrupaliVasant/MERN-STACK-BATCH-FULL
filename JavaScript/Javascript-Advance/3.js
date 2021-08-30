// callback function

function display(n){
    console.log(n)
}
function calculator(n1,n2,callback){
    let sum=n1+n2;
    callback(sum);
}
calculator(7,2,display);