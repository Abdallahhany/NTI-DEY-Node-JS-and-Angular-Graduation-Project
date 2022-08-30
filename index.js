const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
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
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
<<<<<<< HEAD
const userRouter = require("./routes/user_routes");
app.use("/api/users", userRouter);
=======
app.use(express.static(__dirname+"/images"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/books',bookRouter);
app.use('/carts',cartRouter);
app.use('/receipts',receiptRouter);
>>>>>>> cd217ea328cef2b1dc511373b9ff9e65f73839c1

app.get("/", (req, res) => {
  res.send("Welcome to Book Store Project");
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`connected to port http://localhost:${port}`);
});
