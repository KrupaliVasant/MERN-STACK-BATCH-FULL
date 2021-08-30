const express=require('express');
let app =express();

app.get('/',(req,res)=>{
    res.send("welcome to To Do")
});


module.exports=app;