const express = require("express");
const SignupRoute = express.Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const Auth = require("../models/user.model");

SignupRoute.post("/", async (req, res) => {
  const { email, password, name, age, gender, address, phone, role, Key } =
    req.body;
  const user = await Auth.findOne({ email });
  //   console.log(role, process.env.Key);
  if (email == "" && password == "") {
    return res.json({ status: "NO", message: "Please Fill Credentials" });
  }
  if (user) {
    return res.json({
      status: "NO",
      message: "User Already Exists, Please Signup with Different Credentials",
    });
  }

  try {
    if (role && Key == process.env.Key) {
      console.log(1);
      const newUser = await Auth.create({
        email,
        name,
        password,
        age,
        gender,
        address,
        role: role,
        phone,
      });
      return res
        .status(201)
        .json({ status: "OK", message: "New User Signedup" });
    } else {
      console.log(2);

      const newUser = await Auth.create({
        email,
        name,
        password,
        age,
        gender,
        address,
        phone,
      });
      return res
        .status(201)
        .json({ status: "OK", message: "New User Signedup" });
    }
  } catch (e) {
    console.log(e.message);
    res.send({ message: e.message });
  }
});

module.exports = SignupRoute;
