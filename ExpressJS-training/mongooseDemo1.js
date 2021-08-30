const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(express.static("public"));
app.use("/images", express.static(__dirname + "/Images"));

app.use((req, res, next) => {
  console.log(req.method);
  next();
});

mongoose.connect("mongodb://localhost:27017/julyBatch");
// get reference to DB
const db = mongoose.connection;
var empObj;
var Employee;

db.on("error", console.error.bind(console, "Connection Error!"));

db.once("open", () => {
  console.log("Connection Successful");
  //define schema
  var EmployeeSchema = mongoose.Schema({
    id: String,
    first_name: String,
    last_name: String,
    age: Number,
    city: String,
  });
  // complie schema to model
  Employee = mongoose.model("Employee", EmployeeSchema, "employee99"); // model name, schema name, collection name
  // create document intance
});
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => {
  res.send("Hi all!!!");
});

app.post("/register", urlencodedParser, async (req, res) => {
  var data = req.body;
  console.log(data, "data");
  empObj = new Employee({
    id: `${data.id}`,
    first_name: `${data.first_name}`,
    last_name: `${data.last_name}`,
    age: `${data.age}`,
    city: `${data.city}`,
  });
  await empObj.save((err, emp) => {
    if (err) {
      console.log("Sorry! Please try again");
    } else {
      console.log("Data inserted");
      res.end("Thank you for register.");
    }
  });
});

const server = app.listen(8000, () => {
  console.log("Server Started");
});
// welcome to Express
