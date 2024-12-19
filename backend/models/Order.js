import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [{ productId: mongoose.Schema.Types.ObjectId, quantity: Number }],
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ["Pending", "Completed"], default: "Pending" },
});

export default mongoose.model("Order", orderSchema);
