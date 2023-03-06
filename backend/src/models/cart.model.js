// const mongoose=require("mongoose")

// const proSchema=mongoose.Schema({
//     name:String,
//     brand:String,
//     description:String,
//     image_link:String,
//     price:Number,
//     price_sign:String,
//     product_type:String,
//     quantity:Number,
//     rating:Number,
//     review:Number,
//     category:String,
//     userID:{type:String,required:true}
// })

// const CartModel=mongoose.model("cart",proSchema)

// module.exports={CartModel}


const { Schema, model } = require("mongoose");

const CartSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "product",
          required: true,
        },

        quantity: { type: Number, default: 1 },
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },
    modifiedOn: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false, timestamps: true }
);

const CartModel = model("cart", CartSchema);

module.exports = CartModel;