const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const app = express();
const bookRouter = require('./routes/book_routes');
const cartRouter = require('./routes/cart_routes');
const receiptRouter = require('./routes/receipt_routes');

//connect to online mongodb
const url = process.env.MONGOURL;
mongoose.connect(url, () => {
  console.log("connected to atlas mongodb");
});

//middelwares

//routes
app.use(express.static(__dirname+"/images"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/books',bookRouter);
app.use('/carts',cartRouter);
app.use('/receipts',receiptRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Book Store Project");
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`connected to port http://localhost:${port}`);
});
