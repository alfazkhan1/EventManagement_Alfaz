import React from "react";
import { Routes, Route } from "react-router-dom";
import UserDashboard from "../User/UserDashboard"
import Cart from "../User/Cart"
import GuestList from "../User/GuestList"
import OrderStatus from "../User/OrderStatus"


function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserDashboard />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/guest-list" element={<GuestList />} />
      <Route path="/order-status" element={<OrderStatus />} />
    </Routes>
  );
}

export default UserRoutes;
