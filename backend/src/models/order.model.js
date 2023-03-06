const mongoose = require("mongoose")

// const orderSchema = mongoose.Schema({
//     name: String,
//     brand: String,
//     description: String,
//     image_link: String,
//     price: Number,
//     price_sign: String,
//     product_type: String,
//     quantity: Number,
//     rating: Number,
//     review: Number,
//     category: String,
//     email: String,
//     userID: { type: String, required: true }
// }, { versionKey: false, timestamps: true });

// const OrderModel = mongoose.model("order", orderSchema)

// module.exports = { OrderModel }


const { Schema, model } = require("mongoose");

const OrderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    cartId: {
      type: Schema.Types.ObjectId,
      ref: "cart",
      required: true,
    },
    status: Array,
    currentStatus: String,
    priceTotal: Number,
    paymentMethod: String,
    DeliveryAdress: String,
    OrderDelivered: { type: Boolean, default: false },
    DeliveryDate: String,
  },
  { versionKey: false, timestamps: true }
);

const OrderModel = model("order", OrderSchema);

module.exports = OrderModel;
