const express = require('express');
let app = express();
const path = require('path');

app.use('/welcome',express.static(path.join(__dirname,"public")))   ///welcome is path we can give any name

// app.get('/',(req,res)=>{
//     res.send("Hello user")
// })

module.exports=app;