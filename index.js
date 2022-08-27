const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const app = express();
const bookRouter = require('./routes/book_routes');

//connect to online mongodb
const url = process.env.MONGOURL;
mongoose.connect(url, () => {
  console.log("connected to atlas mongodb");
});

//middelwares

//routes
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/books',bookRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Book Store Project");
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`connected to port http://localhost:${port}`);
});
