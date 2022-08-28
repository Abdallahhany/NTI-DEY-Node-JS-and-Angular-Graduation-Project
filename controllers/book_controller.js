const bookModel = require('../models/book_model');

class Book{
    static allBooks = async (req,res)=>{
        try{
            const books = await bookModel.find();
            res.send({success:true,data:books});
        }catch(e){
            res.send({success:true,err:e.message,data:e});
        }
    }
    static singleBook = async (req,res)=>{
        try{
            const book = await bookModel.findById(req.params.bookId);
            res.send({success:true,data:book});
        }catch(e){
            res.send({success:false,err:e.message,data:e});
        }
    }
    static addBook = async (req,res)=>{
        try{
            const book = new bookModel(req.body);
            await book.save();
            res.send({success:true,data:book});
        }catch(e){
            res.send({success:false,err:e.message,data:e});
        }
    }
    static updateBook = async (req,res)=>{
        const bookId = req.params.bookId;
        try{
            const updatedBook = await bookModel.findByIdAndUpdate(bookId,req.body,{runValidators:true,new:true});
            res.send({success:true,data:updatedBook});
        }catch(e){
            res.send({success:false,err:e.message,data:e});
        }
    }
    static deleteBook = async (req,res)=>{
        const bookId = req.params.bookId;
        try{
            await bookModel.findByIdAndDelete(bookId);
            res.send({success:true,msg:'deleted successfully'});
        }catch(e){
            res.send({success:false,err:e.message,data:e});
        }
    }
}

module.exports = Book;