import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

const AdminMenu = () => {
  return (
    <div className="menu-container">
      <h2>Admin Menu</h2>
      <ul>
        <li>
          <Link to="/admin/memberships">Manage Memberships</Link>
        </li>
        <li>
          <Link to="/admin/users">Manage Users</Link>
        </li>
        <li>
          <Link to="/admin/vendors">Manage Vendors</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminMenu;
