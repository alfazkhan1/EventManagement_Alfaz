// import React, { useState, useEffect } from "react";

// const VendorDashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState("");

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     const response = await fetch("/api/vendor/viewProducts");
//     const data = await response.json();
//     setProducts(data);
//   };

//   const handleAddProduct = async () => {
//     await fetch("/api/vendor/addProduct", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name: newProduct }),
//     });
//     fetchProducts();
//     setNewProduct("");
//   };

//   const handleDeleteProduct = async (id) => {
//     await fetch(`/api/vendor/deleteProduct/${id}`, { method: "DELETE" });
//     fetchProducts();
//   };

//   return (
//     <div>
//       <h1>Vendor Dashboard</h1>
//       <input
//         type="text"
//         value={newProduct}
//         onChange={(e) => setNewProduct(e.target.value)}
//         placeholder="New Product"
//       />
//       <button onClick={handleAddProduct}>Add Product</button>

//       <h2>Your Products</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product._id}>
//             {product.name}
//             <button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default VendorDashboard;

import React from "react";
import { Link } from "react-router-dom";

function VendorDashboard() {
  return (
    <div>
      <h1>Vendor Dashboard</h1>
      <ul>
        <li><Link to="/vendor/add-product">Add Product</Link></li>
        <li><Link to="/vendor/view-products">View Products</Link></li>
        <li><Link to="/vendor/transactions">View Transactions</Link></li>
      </ul>
    </div>
  );
}

export default VendorDashboard;
