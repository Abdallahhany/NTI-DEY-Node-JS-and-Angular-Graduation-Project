const cartModel = require("../models/cart_model");
const bookModel = require("../models/book_model");
const receiptModel = require("../models/receipt_model");
const userModel = require("../models/user_model");

class Cart {
  static showCart = async (req, res) => {
    try {
      const userId = req.user._id;
      const cart = await cartModel
        .findOne({ userId: userId })
        .populate("books");
      if (!cart) {
        return res.send({ success: false, msg: "This user has no carts" });
      }
      res.send({
        success: true,
        books: cart.books,
        totalPrice: cart.totalPrice,
      });
    } catch (error) {
      res.send({ success: false, err: error.message });
    }
  };
  static addToCart = async (req, res) => {
    try {
      //const userId = req.user.id;
      const bookId = req.body.bookId;
      const book = await bookModel.findById(bookId);
      if (!book) {
        return res.status(400).json({
          message: "There is no book with the given id.",
        });
      }
      // console.log(cart);
      // let bookIds = [];
      // for (let b of cart.books) {
      //   bookIds.push(b.toString());
      // }
      // if (bookIds.indexOf(bookId) !== -1) {
      //   return res.status(400).json({
      //     message: "Book is already in your cart",
      //   });
      // }
      let cart = null;
      cart = await cartModel.findOne({ userId: req.user._id });
      if (!cart) {
        cart = new cartModel();
        cart.userId = req.user._id;
        cart.books.push(bookId);
        cart.totalPrice += book.price;
      } else {
        cart.books.push(bookId);
        cart.totalPrice += book.price;
      }
      cart.save();

      res.status(200).json({
        success: true,
        msg: "Book added to cart!",
        data: cart,
      });
    } catch (error) {
      console.log(error);
      res.send({ success: false, err: error.message });
    }
  };
  static deleteBookFromCart = async (req, res) => {
    try {
      const userId = req.user.id;
      const bookId = req.params.bookId;
      const book = await bookModel.findById(bookId);
      if (!book) {
        return res.status(400).json({
          success: false,
          msg: "There is no book with the given id.",
        });
      }
      const cart = await cartModel.findOne({ user: userId });
      cart.books = cart.books.map((b) => b).filter((b) => b._id != bookId);
      cart.totalPrice -= book.price;
      cart.save();
      console.log(cart);
      res.status(200).json({
        success: true,
        msg: "Book removed from cart!",
        data: cart,
      });
    } catch (error) {
      res.send({ success: false, msg: error.message });
    }
  };
  static checkout = async (req, res) => {
    try {
      const userId = req.user.id;
      let products = [];
      const cart = await cartModel.findOne({ user: userId }).populate("books");
      for (let book of cart.books) {
        products.push({
          id: book._id,
          title: book.title,
          author: book.author,
          cover: book.cover,
          price: book.price,
          qty: req.body[book._id.toString()],
        });
      }
      const receipt = await receiptModel.create({
        user: userId,
        productsInfo: products,
        totalPrice: req.body.totalPrice,
      });
      await userModel.update(
        { _id: userId },
        { $push: { receipts: receipt._id } }
      );
      cart.books = [];
      cart.totalPrice = 0;
      cart.save();
      return res.status(200).json({
        success: true,
        msg: "Thank you for your order! Books will be sent to you as soon as possible!",
        data: receipt,
      });
    } catch (error) {
      res.send({ success: false, msg: error.message });
    }
  };
}

module.exports = Cart;
