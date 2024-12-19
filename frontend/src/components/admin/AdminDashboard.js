import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li><Link to="/admin/manage-memberships">Manage Memberships</Link></li>
        <li><Link to="/admin/manage-users">Manage Users</Link></li>
        <li><Link to="/admin/manage-vendors">Manage Vendors</Link></li>
      </ul>
    </div>
  );
}

export default AdminDashboard;
