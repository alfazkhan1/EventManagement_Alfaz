import express from "express";
import Membership from "../models/membership.js";

const router = express.Router();

// Get all memberships
router.get("/", async (req, res) => {
  try {
    const memberships = await Membership.find();
    res.json(memberships);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new membership
router.post("/", async (req, res) => {
  const { name, email, membershipType } = req.body;

  try {
    const newMembership = new Membership({ name, email, membershipType });
    const savedMembership = await newMembership.save();
    res.status(201).json(savedMembership);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update membership
router.put("/:id", async (req, res) => {
  const { name, email, membershipType } = req.body;

  try {
    const updatedMembership = await Membership.findByIdAndUpdate(
      req.params.id,
      { name, email, membershipType },
      { new: true }
    );
    res.json(updatedMembership);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete membership
router.delete("/:id", async (req, res) => {
  try {
    await Membership.findByIdAndDelete(req.params.id);
    res.json({ message: "Membership deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
