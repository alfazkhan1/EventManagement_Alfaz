import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  services: [String],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Vendor", vendorSchema);
