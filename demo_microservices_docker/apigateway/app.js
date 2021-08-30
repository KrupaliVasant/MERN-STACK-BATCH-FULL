const express=require('express');
const {createProxyMiddleware}=require('http-proxy-middleware');
const config=require('./config')
let proxyTodo;
let proxyUser;

let app =express();

app.get('/',(req,res)=>{
    res.send("Hello User")
});

proxyTodo=createProxyMiddleware({target:config.todo_URL,pathRewrite:{'^/tododata/':'/'}});
app.use('/tododata/',proxyTodo);


module.exports=app;