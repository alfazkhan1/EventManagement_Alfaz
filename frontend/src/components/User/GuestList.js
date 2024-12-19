// import React, { useState, useEffect } from "react";
// import API from "../../services/api";

// function GuestList() {
//   const [guests, setGuests] = useState([]);

//   useEffect(() => {
//     const fetchGuests = async () => {
//       try {
//         const response = await API.get("users/register");
//         setGuests(response.data);
//       } catch (error) {
//         console.error("Error fetching guest list:", error);
//       }
//     };

//     fetchGuests();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       await API.delete(`/user/guests/${id}`);
//       setGuests(guests.filter((guest) => guest.id !== id));
//       alert("Guest removed successfully.");
//     } catch (error) {
//       console.error("Error deleting guest:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Guest List</h1>
//       {guests.length > 0 ? (
//         <ul>
//           {guests.map((guest) => (
//             <li key={guest.id}>
//               {guest.name} - {guest.email}
//               <button onClick={() => handleDelete(guest.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No guests found.</p>
//       )}
//     </div>
//   );
// }

// export default GuestList;
