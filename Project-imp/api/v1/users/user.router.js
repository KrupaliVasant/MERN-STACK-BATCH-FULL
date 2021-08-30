// router file

const router = require('express').router();
const userController = require('./user.controller');

router.post('/login',(req,res)=>{
    console.log("User logged In")
});

router.post('/register',(req,res)=>{
    console.log("Sign Up")
});

module.exports=router;