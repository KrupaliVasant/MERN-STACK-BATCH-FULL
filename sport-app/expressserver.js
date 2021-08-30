var express = require("express");
var app = express();

var cors = require("cors");
app.use(cors());

var bodyPaeser = require("body-parser");
var urlencodedParser = bodyPaeser.urlencoded({ extended: false });

app.use(function (req, res, next) {
  console.log(req.method);
  next();
});

// get method
app.get("/", function (req, res) {
  res.send("Hello Every one!!!");
});

// get method
app.get("/productget", function (req, res) {
  console.log("req.body" + req);
  const reqData = {
    product_id: req.query.product_id,
    product_name: req.query.product_name,
  };
  console.log(reqData);
  res.end(JSON.stringify(reqData));
});

// post method
app.post("/productpost", urlencodedParser, function (req, res) {
  // Prepare output in JSON formate
  const myData = {
    product_id: req.body.product_id,
    product_name: req.body.product_name,
  };
  console.log(myData);
  res.end(JSON.stringify(myData));
});

var server = app.listen(7000, function () {
  console.log("Server started..");
  console.log("At port no : ", server.address().port);
});
