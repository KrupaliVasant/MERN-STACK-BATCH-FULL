const express = require("express");
let app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());

app.use((req, res, next) => {
  console.log(req.method);
  next();
});

mongoose.connect("mongodb://localhost:27017/sportApp");
const db = mongoose.connection;
var Player;
var PlayerSchema;

db.on("error", console.error.bind(console, "Conection error"));

db.once("open", () => {
  console.log("Connection successfully!!!");
  PlayerSchema = mongoose.Schema({
    name: String,
    email: String,
    sport: String
  });
  Player = mongoose.model("Player", PlayerSchema, "player");
});

app.get("/", (req, res) => {
  res.send("Player");
});

app.get("/player", async (req, res) => {
  await Player.find().exec((err, playerInfo) => {
    if (err) console.log("Error");
    else res.send(playerInfo);
  });
});

module.exports = app;
