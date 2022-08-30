const express = require('express');
const bookRouter = express.Router();
const bookController = require('../controllers/book_controller');
const upload = require('../middlewares/uploadFile_middleware');

//admin and user
bookRouter.get('/',bookController.allBooks);
bookRouter.get('/single/:bookId',bookController.singleBook);

//admin
bookRouter.post('/add',upload.single('bookImg'),bookController.addBook);
bookRouter.put('/update/:bookId',upload.single('bookImg'),bookController.updateBook);
bookRouter.delete('/delete/:bookId',bookController.deleteBook);

module.exports = bookRouter;