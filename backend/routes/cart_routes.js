const express = require("express");
const cartRouter = express.Router();
const cartController = require("../controllers/cart_controller");
const NotFound = require("../controllers/error");
const { isAuth } = require("../middlewares/auth_middleware");

cartRouter.get("/show", isAuth, cartController.showCart);
cartRouter.post("/add", isAuth, cartController.addToCart);
cartRouter.delete("/delete/:bookId", isAuth, cartController.deleteBookFromCart);
cartRouter.post("/checkout", isAuth, cartController.checkout);
cartRouter.all("*", NotFound.notFoundPage);

module.exports = cartRouter;
