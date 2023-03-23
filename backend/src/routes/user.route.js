const express = require("express");
const app = express.Router();
const UserModel = require("../models/user.model");
const { validate } = require("../middleware/validate.middleware");
// app.use(validate); //it is admin validation;

// ****************list of all users with Pagination & Sorting/Filtering*************
app.get("/", async (req, res) => {
  let { page = 1, limit = 10, name, address } = req.query;
  try {
    if (page && limit && name) {
      let user = await UserModel.find({
        name: { $regex: `${name}`, $options: "six" },
      });
      res.status(200).send({ message: "OK", user });
    } else if (page && limit && address) {
      let user = await UserModel.find({
        address: { $regex: `${address}`, $options: "six" },
      });
      res.status(200).send({ message: "OK", user });
    } else if (page && limit) {
      if (Number(page) === 1) {
        let user = await UserModel.find()
          .skip((page - 1) * 10)
          .limit(+limit);
        res.status(200).send({ message: "OK", user });
      } else {
        let s = Number(page) * Number(limit) - Number(limit);
        let user = await UserModel.find().skip(s).limit(+limit);
        res.status(200).send({ message: "OK", user });
      }
    } else {
      const user = await UserModel.find()
        .skip((page - 1) * 10)
        .limit(+limit);
      return res.status(200).send({ message: "OK", user });
    }
  } catch (e) {
    return res.send(e.message);
  }
});

// // ************Update the user from list****************
// app.patch("/update/:id", async (req, res) => {
//     const { id } = req.params;
//     const data = req.body;
//     try {
//         await UserModel.findByIdAndUpdate({ _id: id }, data);
//         res.status(200).send({ "msg": `Updated Successfully User` });
//     } catch (err) {
//         res.status(404).send({ "Error": err.message });
//     }
// });

// // ************Remove the user from list****************

// app.delete("/delete/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//         await UserModel.findByIdAndDelete({ _id: id });
//         return res.status(200).send({ "msg": "Delete Successfully User" });
//     } catch (e) {
//         res.status(404).send({ "Error": err.message });
//     }
// });

// app.get("/", async (req, res) => {
//   try {
//     const user = await UserModel.find();
//     return res.status(200).send({ message: "OK", user });
//   } catch (e) {
//     return res.send(e.message);
//   }
// });

// ************Remove the user from list****************

app.delete("/deleteproduct/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await UserModel.findByIdAndDelete({ _id: id });

    return res.status(200).send({ Message: "OK" });
  } catch (e) {
    return res.send(e.message);
  }
  // console.log("helllo");
  // return;
});



module.exports = app;
