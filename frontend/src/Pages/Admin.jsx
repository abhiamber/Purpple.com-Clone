import React, { useState } from "react";
import AddNewProduct from "../components/AbhishekDashboard/AddNewProduct";
import Sidebar from "../components/AbhishekDashboard/Sidebar";
import UserDetails from "../components/AbhishekDashboard/UserDetails";
import ManageQuantity from "../components/AbhishekDashboard/ManageQunatity";
import OrderManagement from "../components/AbhishekDashboard/OrderManagement";
import ProductDetails from "../components/AbhishekDashboard/ProductDetails";
import OrderDetails from "../components/AbhishekDashboard/OrderDetails";

const Admin = () => {
  const [dispalyStatus, setStatusDisplay] = useState("OrderManagement");
 

  // console.log(dispalyStatus);

  const displayFunction = (data) => {
    // console.log
    setStatusDisplay(data);
  };

  return (
    <div
      style={{ marginTop: "10px", minHeight: "70vh", marginBottom: "50px" }}
      className="container"
    >
      <div className="sidebar">
        <Sidebar displayFunction={displayFunction} />
      </div>
      <div className="rightSidebar">
        {" "}
        <div
          style={{
            display: dispalyStatus === "AddNewProduct" ? "block" : "none",
          }}
        >
          {" "}
          <AddNewProduct />
        </div>
        <div
          style={{
            display: dispalyStatus === "ProductList" ? "block" : "none",
          }}
        >
          {" "}
          <ProductDetails />
        </div>
        <div
          style={{
            display: dispalyStatus === "UserDetails" ? "block" : "none",
          }}
        >
          {" "}
          <UserDetails />
        </div>
        <div
          style={{
            display: dispalyStatus === "OrderManagement" ? "block" : "none",
          }}
        >
          {" "}
          <OrderManagement />
        </div>
        <div
          style={{
            display: dispalyStatus === "ManageQuantity" ? "block" : "none",
          }}
        >
          {" "}
          <ManageQuantity />
        </div>
        <div
          style={{
            display: dispalyStatus === "SeeOrderDetails" ? "block" : "none",
          }}
        >
          {" "}
          <OrderDetails />
        </div>
      </div>
    </div>
  );
};

export default Admin;
