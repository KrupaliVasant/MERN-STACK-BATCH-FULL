const revNum = () =>{
    const x = 32243;
    const result = x.toString().split('').reverse().join('');
    console.log("Input is: "+ x);    
    console.log("Output is: "+result);
}

revNum();