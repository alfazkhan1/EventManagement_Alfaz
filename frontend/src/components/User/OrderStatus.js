// import React, { useState, useEffect } from "react";
// import API from "../../services/api";

// function OrderStatus() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await API.get("/user/orders");
//         setOrders(response.data);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div>
//       <h1>Order Status</h1>
//       {orders.length > 0 ? (
//         <ul>
//           {orders.map((order) => (
//             <li key={order.id}>
//               Order ID: {order.id} - Status: {order.status}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No orders found.</p>
//       )}
//     </div>
//   );
// }

// export default OrderStatus;
