const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: [
    {
      type: String,
      required: true,
    },
  ],
  orderDate: {
    type: Date,
    default: Date.now,
  },
  invoice: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  shipment: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  payment: {
    proofPayment: {
      type: String,
      required: true,
    },
    bankFrom: {
      type: String,
      required: true,
    },
    accountHolder: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "on process",
    },
  },
});

module.exports = mongoose.model("Order", orderSchema);
