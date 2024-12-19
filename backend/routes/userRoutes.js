import express from "express";
import { getUserCart, updateUserCart, deleteUserCart } from "../controllers/userController.js";

const router = express.Router();

router.get("/cart", getUserCart);
router.put("/cart/update", updateUserCart);
router.delete("/cart/delete", deleteUserCart);

export default router;
