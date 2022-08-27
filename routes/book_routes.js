const express = require('express');
const bookRouter = express.Router();
const bookController = require('../controllers/book_controller');

//admin and user
bookRouter.get('/',bookController.allBooks);
bookRouter.get('/single/:bookId',bookController.singleBook);

//admin
bookRouter.post('/add',bookController.addBook);
bookRouter.put('/update/:bookId',bookController.updateBook);
bookRouter.delete('/delete/:bookId',bookController.deleteBook);

module.exports = bookRouter;