const mongoose = require('mongoose');

const receiptSchema = mongoose.Schema({
    userId:{
        ref:'User',
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    books:[
        {
            bookId:{
                ref:'Book',
                type:mongoose.Schema.Types.ObjectId,
                required:true
            }
        }
    ],
    totalPrice:{
        type:Number,
        required:true,
    }
},{
    timestamps:true
});

const receiptModel = mongoose.model('Receipt',receiptSchema);

module.exports = receiptModel;