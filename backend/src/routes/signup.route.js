const express = require("express");
const SignupRoute = express.Router();
const jwt = require("jsonwebtoken");
const Auth = require("../models/user.model");

SignupRoute.post("/", async (req, res) => {
    const { email, password, name, age, gender, address, phone } = req.body;
    const user = await Auth.findOne({ email });
    const token = req.headers["token"];
    if (email == "" && password == "") {
        return res.json({ status: "NO", message: "Please Fill Credentials" });
    }
    if (user) {
        return res.json({
            status: "NO",
            message: "User Already Exists, Please Signup with Different Credentials",
        });
    } else {
        if (token) {
            try {
                const verify = jwt.verify(token, "auth@SkinCare");
                if (verify) {
                    if (verify.role === "Admin") {
                        const newUser = await Auth.create({
                            email,
                            name,
                            password,
                            age,
                            gender,
                            address,
                            role: "Employee",
                            phone,
                        });
                        return res.status(201).json("New Employee Signedup");
                    } else {
                        res
                            .status(403)
                            .json({ status: "NO", message: "Not Authorized !!" });
                    }
                } else {
                    return res.json({ status: "NO", message: "Send the Correct Token" });
                }
            } catch (e) {
                console.log(e);
            }
        } else {
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
    }
});

module.exports = SignupRoute;