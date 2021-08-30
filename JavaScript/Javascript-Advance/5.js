function f(){
    let date = new Date();
    console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
}
setInterval(f,1000);