const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:3,
    },
    description:{
        type:String,
        required:true,
        minlength:5
    },
    image:{
        type:String,
        //make it true
        required:false,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
        minlength:3,
    },
    publishingDate:{
        type:Date,
        required:true,
    },
    numOfPages:{
        type:Number,
        required:true,
    },
    rating:{
        type:Number,
        default:0
    },
    ratedBy:[
        {
            userId:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'User',
            },
            rateValue:{
                type:Number,
                required:true,
                min:0,
                max:5,
            }
        }
    ],
    purchaseCount:{
        type:Number,
        default:0
    }
},{
    timestamps:true
});

const bookModel = mongoose.model('Book',bookSchema);

module.exports = bookModel;