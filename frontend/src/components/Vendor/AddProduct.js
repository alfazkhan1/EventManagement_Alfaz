// import React, { useState } from "react";
// import API from "../../services/api";

// function AddProduct() {
//   const [product, setProduct] = useState({ name: "", description: "", price: "" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post("/vendor/products", product);
//       alert("Product added successfully!");
//       setProduct({ name: "", description: "", price: "" });
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Add Product</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={product.name}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Description:
//           <textarea
//             name="description"
//             value={product.description}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Price:
//           <input
//             type="number"
//             name="price"
//             value={product.price}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// }

// export default AddProduct;
