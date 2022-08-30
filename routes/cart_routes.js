const express = require('express');
const cartRouter = express.Router();
const cartController = require('../controllers/cart_controller');

//add user auth middleware
cartRouter.get('/show',cartController.showCart);
cartRouter.post('/add',cartController.addToCart);
cartRouter.delete('/delete/:bookId',cartController.deleteBookFromCart);
cartRouter.delete('/delete',cartController.clearCart);

module.exports = cartRouter;