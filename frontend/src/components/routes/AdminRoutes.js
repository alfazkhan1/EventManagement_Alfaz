import React from "react";
import { Routes, Route } from "react-router-dom";
import ManageMemberships from '../admin/ManageMemberships';
import ManageUsers from '../admin/ManageUsers';
import ManageVendors from '../admin/ManageVendors';
import AdminDashboard from "../admin/AdminDashboard"



function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard/>} />
      <Route path="/manage-memberships" element={<ManageMemberships/>} />
      <Route path="/manage-users" element={<ManageUsers/>} />
      <Route path="/manage-vendors" element={<ManageVendors />} />
    </Routes>
  );
}

export default AdminRoutes;
