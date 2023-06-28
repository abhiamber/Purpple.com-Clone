const express = require("express");
require("dotenv").config();
const LoginRoute = express.Router();
const jwt = require("jsonwebtoken");
const Auth = require("../models/user.model");

LoginRoute.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Auth.findOne({ email });
    if (!user) {
      return res.status(401).send({ message: "user not found", status: "NO" });
    } else {
      if (password !== user.password) {
        return res.status(401).send({ message: "Unauthorized", status: "NO" });
      } else {
        const token = jwt.sign(
          {
            id: user._id,
            role: user.role,
            name: user.name,
          },
          process.env.token_password,
          { expiresIn: "28days" }
        );

        res.status(201).json({
          token,
          message: "Login Successful",
          status: "OK",
          user: user.name,
          role: user.role,
          phone: user.phone,
          email: user.email,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = LoginRoute;
