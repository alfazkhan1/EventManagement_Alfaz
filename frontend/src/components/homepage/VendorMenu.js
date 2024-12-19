import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

const VendorMenu = () => {
  return (
    <div className="menu-container">
      <h2>Vendor Menu</h2>
      <ul>
        <li>
          <Link to="/vendor/items">Your Items</Link>
        </li>
        <li>
          <Link to="/vendor/add">Add New Item</Link>
        </li>
        <li>
          <Link to="/vendor/transactions">Transactions</Link>
        </li>
      </ul>
    </div>
  );
};

export default VendorMenu;
