const { validate } = require("../middleware/validate.middleware");
const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const OrderModel = require("../models/order.model");
const app = express.Router();

app.get("/getall", validate, async (req, res) => {
  const { token } = req.headers;
  let { page = 1, search } = req.query;
  console.log(page, search);
  let delivered;
  try {
    if (search) {
      delivered = await OrderModel.find()
        .skip((page - 1) * 10)
        .limit(5)
        .populate({
          path: "userId",
          select: ["name"],
          match: { name: { $eq: search } },
        })
        .populate({
          path: "cartId",
          populate: { path: "products", populate: "productId" },
        })
        .sort({ createdAt: -1 });
    } else {
      delivered = await OrderModel.find()
        .skip((page - 1) * 10)
        .limit(5)
        .populate({
          path: "userId",
          select: ["name"],
        })
        .populate({
          path: "cartId",
          populate: { path: "products", populate: "productId" },
        })
        .sort({ createdAt: -1 });
    }
    return res.status(201).send({ delivered, Message: "OK" });
  } catch (e) {
    return res.send({ msg: "Some thing went wrong" });
  }
});

// Get all the order  list  of delivered item *************
app.get("/getdeliveredorder", async (req, res) => {
  let { token } = req.headers;
  try {
    let delivered = await OrderModel.find({ OrderDelivered: true }).populate({
      path: "cartId",
      populate: { path: "products", populate: "productId" },
    });
    return res.status(201).send({ delivered, Message: "OK" });
  } catch (e) {
    return res.send("Some thing went wrong");
  }
});

// Get list of Order Which is Not delivered
app.get("/getnotdelivered", async (req, res) => {
  let { token } = req.headers;
  try {
    let notDelivered = await OrderModel.find({
      OrderDelivered: false,
    }).populate({
      path: "cartId",
      populate: { path: "products", populate: "productId" },
    });
    return res.status(201).send({ notDelivered, Message: "OK" });
  } catch (e) {
    return res.send("Some thing went wrong");
  }
});

// Get Order details of particluar user with particular order Id

app.get("/getorderdetailsofuser", async (req, res) => {
  let { token } = req.headers;

  token = jwt.verify(token, process.env.token_password);
  let userId = token.id;

  try {
    let notDelivered = await OrderModel.find({
      userId,
    })
      .populate({
        path: "cartId",
        populate: { path: "products", populate: "productId" },
      })
      .sort({ createdAt: -1 });

    return res.status(201).send({ notDelivered, Message: "OK" });
  } catch (e) {
    return res.send("Some thing went wrong");
  }
});

// Get Order details of particluar user with particular order Id

app.get("/getnotdeliveredofuser/", async (req, res) => {
  let { token } = req.headers;

  token = jwt.verify(token, process.env.token_password);
  let userId = token.id;

  try {
    let notDelivered = await OrderModel.find({
      userId,
    })
      .populate({
        path: "cartId",
        populate: { path: "products", populate: "productId" },
      })
      .sort({ createdAt: -1 });

    return res.status(201).send({ notDelivered, Message: "OK" });
  } catch (e) {
    return res.send("Some thing went wrong");
  }
});

//  orderconfirmed*********************

app.post("/", async (req, res) => {
  let { token } = req.headers;
  const { priceTotal, paymentMethod, DeliveryAdress, cartId } = req.body;
  // console.log(req.body);

  token = jwt.verify(token, process.env.token_password);

  let userId = token.id;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  let DeliveryDate =
    mm + "/" + (Number(dd) + Math.floor(Math.random() * 3 + 2)) + "/" + yyyy;

  try {
    let neworder = new OrderModel({
      userId,
      cartId,
      status: ["orderconfirmed"],
      currentStatus: "orderconfirmed",
      priceTotal,
      paymentMethod,
      DeliveryAdress,
      DeliveryDate,
    });

    await neworder.save();
    return res.status(200).send({ Message: "OK", neworder });
  } catch (e) {
    return res.send(e.message);
  }
});

//     change the status of the item

app.post("/changestatus", validate, async (req, res) => {
  const { status, orderId } = req.body;
  let neworderstatus = await OrderModel.findOne({ _id: orderId });
  // console.log(neworder);
  neworderstatus = neworderstatus.status;
  neworderstatus.push(status);
  try {
    if (status === "Delivered") {
      const order = await OrderModel.updateOne(
        { _id: orderId },
        {
          $set: {
            currentStatus: status,
            OrderDelivered: true,
            status: neworderstatus,
          },
        }
      );
      return res.status(200).send("Order Delivered");
    }

    const order = await OrderModel.findByIdAndUpdate(
      { _id: orderId },
      { $set: { currentStatus: status, status: [...neworderstatus] } }
    );
    return res.send({ msg: "Status of order has been changed", status });
  } catch (e) {
    return res.send(e.message);
  }
});

// *******************Total Income****************

app.get("/totalincome", async (req, res) => {
  let totalOrderOfTheDay = await OrderModel.find({
    createdAt: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) },
  });
  let total = 0;

  for (let i = 0; i < totalOrderOfTheDay.length; i++) {
    total += totalOrderOfTheDay[i].priceTotal;
  }
  return res.send({ total });
});

module.exports = app;
