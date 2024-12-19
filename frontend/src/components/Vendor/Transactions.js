// import React, { useState, useEffect } from "react";
// import API from "../../services/api";

// function Transactions() {
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     const fetchTransactions = async () => {
//       try {
//         const response = await API.get("/vendor/transactions");
//         setTransactions(response.data);
//       } catch (error) {
//         console.error("Error fetching transactions:", error);
//       }
//     };

//     fetchTransactions();
//   }, []);

//   return (
//     <div>
//       <h1>Transactions</h1>
//       {transactions.length > 0 ? (
//         <ul>
//           {transactions.map((transaction) => (
//             <li key={transaction.id}>
//               Transaction ID: {transaction.id} - Amount: ${transaction.amount}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No transactions found.</p>
//       )}
//     </div>
//   );
// }

// export default Transactions;
