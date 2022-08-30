const receiptModel = require('../models/receipt_model');

class Receipt{
    static showUserReceipts = async (req,res)=>{
        res.status(200).send('show all user receipts');
    }
    static showSingleReceipt = async (req,res)=>{
        res.status(200).send('show single receipt');
    }
    static addReceipt = async (req,res)=>{
        res.status(200).send('create user receipt');
    }
}

module.exports = Receipt;