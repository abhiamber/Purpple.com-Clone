const http = require("http");
const express = require("express");
const app = express();
const httpServer = http.createServer(app);
const mongoose = require("mongoose");
const connect = require("./src/config/db");
const UserRoutes = require("./src/routes/user.route");
const LoginRoute = require("./src/routes/login.route");
const SignupRotue = require("./src/routes/signup.route");
const CartRouter = require('./src/routes/cart.route');
const ProdRoute = require("./src/routes/prod.route");
const OrderRouter  = require('./src/routes/order.route');

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
app.use('/order', OrderRouter);
app.use("/cart", CartRouter);

httpServer.listen(PORT, async () => {
  try {
    await connect();
    console.log("connected to DB");
  } catch (e) {
    console.log({ message: e.message });
  }
  console.log(`Server is running at port ${PORT}`);
});
