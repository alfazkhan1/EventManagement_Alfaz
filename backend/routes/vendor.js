import express from "express";
import { registerVendor, getVendors } from "../controllers/vendorController.js";

const router = express.Router();

router.post("/register", registerVendor);
router.get("/", getVendors);

export default router;
