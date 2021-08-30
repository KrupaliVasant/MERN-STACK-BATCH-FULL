//router file
const router = require('express').Router();
const userController = require('./user.controller');
const UserModel = require('./user.entity');
// const express = require('express');
// const app = express();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/login', (req, res) => {
    console.log('User Logged In')  //print in express console
    userController.loginUser(req.body);
});

router.post('/register', urlencodedParser, async (req, res) => {
    // console.log('Sign Up')  //print in express console
    // const data = await userController.registerUser(req.body);
    // console.log("request : " + req);
    // res.send(`data : ${data}`);
    var data = req.body;
    console.log(data, "data");
    userObj = new UserModel({
        userId: `${data.userId}`,
        userName: `${data.userName}`,
        password: `${data.password}`
    });
    await userObj.save((err, user) => {
        if (err) {
            console.log("Sorry! Please try again" + err);
        } else {
            console.log("Data inserted");
            res.end("Thank you for register.");
        }
    });
});

router.get('/get', (req, res) => {
    console.log("Get Method");
});

module.exports = router