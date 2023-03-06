import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Cart from "./Cart";
import Home from "./Home";
import Login from "./Login";
import Productdetails from "./Productdetails";





import Register from "./Register";
import ProductMain from "./ProductMain"
import Payment from "./Payment";
import Order from "./Order";
import Emptycart from "./Emptycart";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/productmain" element={<ProductMain />} />
      <Route path="/productmain/:id" element={<Productdetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Payment />}></Route>
      <Route path="/order" element={<Order />}></Route>
      <Route path='emptycart' element={<Emptycart/>}></Route>
    </Routes>
  );
}
