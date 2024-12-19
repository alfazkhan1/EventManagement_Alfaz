import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor" },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  amount: { type: Number, required: true },
  status: { type: String, default: "Pending" },
});

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
