const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const config = require('./config');
let app = express();

app.get('/',(req,res)=>{
    res.send('Api gateway');
});

let playerProxy = createProxyMiddleware({
        target:config.PLAYER_PORT, 
        pathRewrite:{'^/playerdata/':'/'}
    });
app.use('/playerdata',playerProxy);

let userProxy = createProxyMiddleware({
        target:config.USER_PORT, 
        pathRewrite:{'^/userdata/':'/'}
    });
app.use('/userdata',userProxy);

module.exports = app;

