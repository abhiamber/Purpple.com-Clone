const http = require("http");
const express = require("express");
// const passports = require("passport");
const app = express();
// app.use(passports.initialize());
const httpServer = http.createServer(app);
const mongoose = require("mongoose");
const connect = require("./src/config/db");
const UserRoutes = require("./src/routes/user.route");
const LoginRoute = require("./src/routes/login.route");
const SignupRotue = require("./src/routes/signup.route");
const CartRouter = require("./src/routes/cart.route");
const ProdRoute = require("./src/routes/prod.route");
const OrderRouter = require("./src/routes/order.route");
const AdminRoutes = require("./src/routes/admin.route");
// let passport = require("./src/config/google-oauth");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
mongoose.set("strictQuery", false);
const cors = require("cors");
const { urlencoded } = require("express");
app.use(urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("yahoo!!!");
});

app.use("/signup", SignupRotue);
app.use("/login", LoginRoute);
app.use("/user", UserRoutes);
app.use("/prod", ProdRoute);
app.use("/order", OrderRouter);
app.use("/cart", CartRouter);
app.use("/admin", AdminRoutes);
// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "/login/failed",
//     session: false,
//     successRedirect: process.env.CLIENT_URL,
//   }),
//   function (req, res) {
//     // console.log(req.user._json);
//     // Successful authentication, redirect home.
//     res.redirect("/login/success");
//   }
// );

// app.get("/login/failed", async (req, res) => {
//   console.log("error");
//   res.status(401).json({
//     error: true,
//     message: "Log in failure",
//   });
// });

// app.get("/login/success", (req, res) => {
//   console.log("sucess");
//   console.log(req.user);

//   if (req.user) {
//     res.status(200).json({
//       error: false,
//       message: "Successfully Loged In",
//       user: req.user,
//     });
//   } else {
//     res.status(403).json({ error: true, message: "Not Authorized" });
//   }
// });

httpServer.listen(PORT, async () => {
  try {
    await connect();
    console.log("connected to DB");
  } catch (e) {
    console.log({ message: e.message });
  }
  console.log(`Server is running at port ${PORT}`);
});
