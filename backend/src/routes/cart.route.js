require("dotenv").config();
const express = require("express");

const app = express.Router();
const jwt = require("jsonwebtoken");

let CartModel = require("../models/cart.model");

// fetching cart items*********************

app.get("/fetchcartItem", async (req, res) => {
  let { token } = req.headers;

  token = jwt.verify(token, process.env.token_password);
  if (!token) {
    return res.send({ msg: "Not logged in", state: "NOT" });
  }
  let userId = token.id;
  let cartItem = await CartModel.find({ userId, active: true }).populate({
    path: "products",
    populate: { path: "productId" },
  });
  try {
    if (cartItem.length > 0) {
      return res.send(cartItem);
    } else {
      return res.send({
        messg: "there is no item inside the cart",
        state: "NOT",
      });
    }
  } catch (e) {
    return res.send(e.message);
  }
});

// **************add to cart*********************
app.post("/", async (req, res) => {
  let { token } = req.headers;
  let { productId, qty = 1 } = req.body;

  token = jwt.decode(token, process.env.token_password);
  if (!token) {
    return res.send({ meesg: "Not logged in", state: "NOT" });
  }
  let userId = token.id;
  let cart = await CartModel.findOne({ userId, active: true });

  try {
    if (!cart) {
      let newCartItem = new CartModel({
        userId,
        products: [{ productId }],
      });
      await newCartItem.save();
      // console.log(newCartItem);
      // console.log(itemIndex, productId, qty, "2");

      return res.send({ meesg: newCartItem, state: "OK" });
    } else {
      let itemIndex = cart.products.findIndex((p) => p.productId == productId);
      console.log(itemIndex, productId, qty, "3");
      if (itemIndex > -1) {
        let productItem = cart.products[itemIndex];
        productItem.quantity = productItem.quantity + qty;
        cart.products[itemIndex] = productItem;
      } else {
        cart.products.push({ productId });
      }

      await cart.save();
      return res.send({ messg: cart, state: "OK" });
    }
  } catch (e) {
    return res.send({ messg: e.message, state: "NOT" });
  }
});

app.post("/changecartactive", async (req, res) => {
  let { token } = req.headers;
  let { cartId } = req.body;
  // console.log(cartId);
  if (!token) {
    return res.status(501).send({ msg: "Not logged in", state: "NOT" });
  }
  token = jwt.decode(token, process.env.token_password);
  let userId = token.id;
  let cart = await CartModel.findOne({ userId });
  try {
    if (!cart) {
      return res.send({ msg: "Cart not exsit", state: "NOT" });
    } else {
      let data = await CartModel.findByIdAndUpdate(cartId, { active: false });
      // console.log(data);
      return res.send({ msg: "Cart updated successfully", data });
    }
  } catch (e) {
    return res.send({ msg: e.message });
  }
});

//  delete all cart
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let itsms = await CartModel.findByIdAndDelete({ _id: id });
    // console.log("These are the items", itsms);
    res.send("Your Order has been placed successfully");
  } catch (err) {
    console.log(err);
    console.log("Error occured while removing product");
  }
});

// ****************Remove from Cart******************
app.post("/delete", async (req, res) => {
  let { token } = req.headers;
  let { productId, cartId } = req.body;
  if (!token) {
    return res.send({ messg: "Not logged in" });
  }
  // console.log(productId, _id, "2");

  token = jwt.decode(token, process.env.token_password);
  let userId = token.id;
  let cart = await CartModel.findOne({ userId, _id: cartId });
  // let itemIndex = cart.products.findIndex((p) => p.productId == productId);
  // console.log(cart);
  // return;
  // console.log(productId, cartId, "1");

  try {
    if (!cart) {
      return res
        .status(401)
        .send({ messg: "There is no no any cart to remove the product" });
    } else {
      // console.log(productId, _id, "3");

      let itemIndex = cart.products.findIndex((p) => p.productId == productId);
      if (cart.products.length === 1) {
        await CartModel.findByIdAndDelete({ _id: cartId });
      } else {
        cart.products.splice(itemIndex, 1);
      }
      await cart.save();
      // console.log(productId, _id, "2", cart);
      return res.status(201).send({ cart });
    }
  } catch (e) {
    return res.send({ messg: e.message });
  }
});
module.exports = app;
