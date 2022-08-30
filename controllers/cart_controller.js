const cartModel = require('../models/cart_model');

class Cart{
    static showCart = async (req,res)=>{
        res.status(200).send('show user cart');
    }
    static addToCart = async (req,res)=>{
        res.status(200).send('add book to user cart');
    }
    static deleteBookFromCart = async (req,res)=>{
        res.status(200).send('delete book from user cart');
    }
    static clearCart = async (req,res)=>{
        res.status(200).send('clear cart');
    }
}

module.exports = Cart;