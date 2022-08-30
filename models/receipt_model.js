const mongoose = require("mongoose");

const receiptSchema = mongoose.Schema(
  {
    user: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
    productsInfo: [],
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const receiptModel = mongoose.model("Receipt", receiptSchema);

module.exports = receiptModel;
