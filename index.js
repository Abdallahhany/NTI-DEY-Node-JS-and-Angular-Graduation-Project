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

//routes
const userRouter = require("./routes/user_routes");
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Book Store Project");
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`connected to port http://localhost:${port}`);
});
