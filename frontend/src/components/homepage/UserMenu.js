import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

const UserMenu = () => {
  return (
    <div className="menu-container">
      <h2>User Menu</h2>
      <ul>
        <li>
          <Link to="/user/vendors">View Vendors</Link>
        </li>
        <li>
          <Link to="/user/cart">Cart</Link>
        </li>
        <li>
          <Link to="/user/guest-list">Guest List</Link>
        </li>
        <li>
          <Link to="/user/order-status">Order Status</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
