import express from "express";
import {
  addProduct,
  deleteProduct,
  viewProducts,
  viewTransactions,
} from "../controllers/vendorController.js";

const router = express.Router();

router.post("/addProduct", addProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/viewProducts", viewProducts);
router.get("/viewTransactions", viewTransactions);

export default router;
