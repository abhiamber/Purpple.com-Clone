const express = require("express");
const app = express.Router();
const { model, Schema } = require("mongoose");
let ProductModel = require("../models/product.model");
const jwt = require("jsonwebtoken");

// Get all Product *******************

app.get("/allproduct", async (req, res) => {
  try {
    let product = await ProductModel.find().limit(200);

    return res.send({ product });
  } catch (e) {
    return res.send(e.message);
  }
});

// ****************************limited qunatity alert******************
app.get("/quantity", async (req, res) => {
  try {
    let limitedProduct = await ProductModel.find({ quantity: { $lt: 5 } });

    return res.status(200).send({ limitedProduct });
  } catch (e) {
    return res.send(e.message);
  }
});

//  Increase the quantity of the product**********************
app.post("/increasequantity", async (req, res) => {
  let { id, qty } = req.body;
  let product = await ProductModel.findOne({ _id: id });
  // console.log(product.quantity, "name");
  // console.log(product);

  try {
    if (!product) {
      return res.send({
        message: "there is not any product with this product ID",
      });
    }

    let totalQunatity = product.quantity + qty;
    console.log(totalQunatity);
    let x = await ProductModel.findByIdAndUpdate(
      { _id: id },
      { $set: { quantity: totalQunatity } }
    );

    return res.send({
      message: `Product updated with ${totalQunatity} quantity`,
    });
  } catch (e) {
    console.log(e.message);
    return res.send(e.message);
  }
});

// ***********************add new product to the product coolecion of the database*
app.post("/addnewproduct", async (req, res) => {
  // console.log("hellojnjjbhj");
  const {
    name,
    product_type,
    brand,
    description,
    price,
    image_link,
    quantity,
  } = req.body;

  try {
    let newProduct = new ProductModel({
      name,
      product_type,
      brand,
      price,
      image_link,
      quantity,
      description,
    });

    await newProduct.save();
    console.log(newProduct);
    return res.status(200).send({ message: "OK", newProduct });
  } catch (e) {
    return res.send(e.message);
  }
});

// Remove product from product list
app.post("/deleteproduct", async (req, res) => {
  let { id } = req.body;
  // console.log(id);
  try {
    await ProductModel.findByIdAndDelete({ _id: id });
    return res.status(200).send("Ok");
  } catch (e) {
    return res.send(e.message);
  }
});

module.exports = app;
