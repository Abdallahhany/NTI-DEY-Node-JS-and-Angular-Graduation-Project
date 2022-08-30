const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
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
        default:0
    }
},{
    timestamps:true
});

const cartModel = mongoose.model('Cart',cartSchema);

module.exports = cartModel;