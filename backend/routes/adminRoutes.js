import express from "express";
import { getAllMemberships } from "../controllers/adminController.js";

const router = express.Router();

router.get("/memberships", getAllMemberships);

export default router;
