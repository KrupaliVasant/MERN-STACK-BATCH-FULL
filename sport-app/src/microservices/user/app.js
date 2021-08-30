const express = require("express");
let app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.method);
  next();
});

mongoose.connect("mongodb://localhost:27017/sportApp");
const db = mongoose.connection;
var User;
var UserSchema;
var uObj;
var urlencodedParser = bodyParser.urlencoded({ extended: false });

db.on("error", console.error.bind(console, "Conection error"));

db.once("open", () => {
  console.log("Connection successfully!!!");
  UserSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String
  });
  User = mongoose.model("User", UserSchema, "user");
});

app.get("/", (req, res) => {
  res.send("User");
});

app.get("/user", async (req, res) => {
  await User.find().exec((err, userinfo) => {
    if (err) console.log("Error");
    else res.send(userinfo);
  });
});

app.post("/user",urlencodedParser, async (req, res) => {
  var data = req.body;
  console.log(data, "data");
  uObj = new User({
    userName:`${data.userName}`,
    email:`${data.email}`,
    password:`${data.password}`
  });
  await uObj.save((err, user) => {
    if (err) {
        console.log("Sorry");
    }
    else {
        console.log(user)
        res.send(user);
    }
  });
});

module.exports = app;
