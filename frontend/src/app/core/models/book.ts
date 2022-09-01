export interface Book {
  _id?: string;
  title: string;
  author: string;
  description: string;
  image: string;
  numOfPages: number;
  rating?:number;
  ratedBy?:[{
    userId:string,
    rateValue:number
  }];
  price: number;
  category:string;
  purchaseCount?: number;
}

/*
title: {
  type: String,
  required: true,
  minlength: 3,
},
description: {
  type: String,
  required: true,
  minlength: 5,
},
image: {
  type: String,
  required:true
},
price: {
  type: Number,
  required: true,
},
category: {
  type: String,
  required: true,
},
author: {
  type: String,
  required: true,
  minlength: 3,
},
numOfPages: {
  type: Number,
  required: true,
},
rating: {
  type: Number,
  default: 0,
},
ratedBy: [
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    rateValue: {
      type: Number,
      min: 0,
      max: 5,
    },
  },
],
purchaseCount: {
  type: Number,
  default: 0,
},
},
{
timestamps: true,
}*/
