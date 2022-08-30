const express = require('express');
const receiptRouter = express.Router();
const receiptController = require('../controllers/receipt_controller');

//add user auth middleware
receiptRouter.get('/',receiptController.showUserReceipts);
receiptRouter.get('/single/:receiptId',receiptController.showSingleReceipt);
receiptRouter.post('/add',receiptController.addReceipt);

module.exports = receiptRouter;