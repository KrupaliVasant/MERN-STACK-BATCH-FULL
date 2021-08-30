const express = require('express');
let app = express();
app.get('/',(req,res)=>{
    res.send("Welcome to ToDo")
})

module.exports=app;