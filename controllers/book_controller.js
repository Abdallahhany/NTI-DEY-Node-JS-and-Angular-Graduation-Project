const bookModel = require('../models/book_model');

class Book{
    static allBooks = async (req,res)=>{
        try{
            const books = await bookModel.find();
            res.send({apiStatus:true,message:'return all books',data:books});
        }catch(e){
            res.send({apiStatus:true,message:e.message,data:e});
        }
    }
    static singleBook = async (req,res)=>{
        try{
            const book = await bookModel.findById(req.params.bookId);
            res.send({apiStatus:true,message:'return single book',data:book});
        }catch(e){
            res.send({apiStatus:false,message:e.message,data:e});
        }
    }
    static addBook = async (req,res)=>{
        try{
            const book = new bookModel(req.body);
            await book.save();
            res.send({apiStatus:true,message:'book added',data:book});
        }catch(e){
            res.send({apiStatus:false,message:e.message,data:e});
        }
    }
    static updateBook = async (req,res)=>{
        
    }
    static deleteBook = async (req,res)=>{

    }
}

module.exports = Book;