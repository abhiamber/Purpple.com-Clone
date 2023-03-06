const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  id: { type: Number, unique: true },
  brand: String,
  name: { type: String, required: true },
  price: { type: Number, required: true },
  price_sign: String,
  image_link: { type: String, required: true },
  image_link1: { type: String, required: true },

  description: { type: String, required: true },
  rating: Number,
  review: Number,
  category: String,
  product_type: String,
  quantity: Number,
});

const ProdModel = model("product", ProductSchema);

module.exports = ProdModel;
