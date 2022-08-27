const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const app = express();

//connect to online mongodb
const url = process.env.MONGOURL;
mongoose.connect(url, () => {
  console.log("connected to atlas mongodb");
});

//middelwares

//routes

app.get("/", (req, res) => {
  res.send("Welcome to Book Store Project");
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`connected to port http://localhost:${port}`);
});
