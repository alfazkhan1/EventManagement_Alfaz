import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, enum: ["basic", "premium"], required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
});

export default mongoose.model("Membership", membershipSchema);
