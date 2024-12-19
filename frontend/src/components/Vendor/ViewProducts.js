// import React, { useState, useEffect } from "react";
// import API from "../../services/api";

// function ViewProducts() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await API.get("/vendor/products");
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>View Products</h1>
//       {products.length > 0 ? (
//         <ul>
//           {products.map((product) => (
//             <li key={product.id}>
//               {product.name} - ${product.price}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No products available.</p>
//       )}
//     </div>
//   );
// }

// export default ViewProducts;
