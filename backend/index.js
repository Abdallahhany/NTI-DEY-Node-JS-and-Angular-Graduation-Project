const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

//connect to online mongodb
const url = process.env.MONGOURL;
mongoose.connect(url, () => {
  console.log("connected to atlas mongodb");
});

//middelwares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(__dirname + "/images"));
console.log(__dirname + "/images");
//routes
const userRouter = require("./routes/user_routes");
const bookRouter = require("./routes/book_routes");
const cartRouter = require("./routes/cart_routes");
app.use("/api/users", userRouter);
app.use("/api/books", bookRouter);
app.use("/api/carts", cartRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Book Store Project");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`connected to http://localhost:${port}`);
});
