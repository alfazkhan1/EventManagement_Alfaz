// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Membership from "./pages/Membership";
// import Reports from "./pages/Reports";
// import Transactions from "./pages/Transactions";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/membership" element={<Membership />} />
//           <Route path="/reports" element={<Reports />} />
//           <Route path="/transactions" element={<Transactions />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminRoutes from "./components/routes/AdminRoutes";
import UserRoutes from "./components/routes/UserRoutes";
import VendorRoutes from "./components/routes/VendorRoutes";
import LandingPage from "./components/homepage/LandingPage";
import LoginPage from "./components/homepage/LoginPage";
import RegisterPage from "./components/homepage/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* User routes */}
        <Route path="/user/*" element={<UserRoutes />} />

        {/* Vendor routes */}
        <Route path="/vendor/*" element={<VendorRoutes />} />

        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
    </Router>
  );
}

export default App;

