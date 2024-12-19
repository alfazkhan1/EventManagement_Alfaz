import React from "react";
import { Routes, Route } from "react-router-dom";
import VendorDashboard from "../Vendor/VendorDashboard"
import AddProduct from "../Vendor/AddProduct"
import ViewProducts from "../Vendor/ViewProducts"
import Transactions from "../Vendor/Transactions"


function VendorRoutes() {
  return (
    <Routes>
      <Route path="/" element={<VendorDashboard />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/view-products" element={<ViewProducts />} />
      <Route path="/transactions" element={<Transactions />} />
    </Routes>
  );
}

export default VendorRoutes;
