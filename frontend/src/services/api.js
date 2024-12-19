import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Authentication
export const loginUser = async (data) => {
  return await API.post("/auth/login", data);
};

export const registerUser = async (data) => {
  return await API.post("/auth/register", data);
};

// Admin APIs
export const getMemberships = async () => {
  return await API.get("/admin/memberships");
};

// Vendor APIs
export const getVendors = async () => {
  return await API.get("/vendor");
};

// Add other API methods as needed...


export default API;