// import Membership from "../models/membership.js";
// import User from "../models/User.js";

// // Add Membership
// export const addMembership = async (req, res) => {
//   const { userId, type } = req.body;
//   try {
//     const endDate = calculateEndDate(type); // Utility function to determine duration
//     const membership = new Membership({ userId, type, endDate });
//     await membership.save();
//     res.status(201).json({ message: "Membership added successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to add membership", error });
//   }
// };

// // Update Membership
// export const updateMembership = async (req, res) => {
//   const { membershipId, type } = req.body;
//   try {
//     const endDate = calculateEndDate(type);
//     const membership = await Membership.findByIdAndUpdate(
//       membershipId,
//       { type, endDate },
//       { new: true }
//     );
//     res.status(200).json({ message: "Membership updated successfully", membership });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to update membership", error });
//   }
// };

// // Utility Function
// const calculateEndDate = (type) => {
//   const currentDate = new Date();
//   if (type === "6 months") return new Date(currentDate.setMonth(currentDate.getMonth() + 6));
//   if (type === "1 year") return new Date(currentDate.setFullYear(currentDate.getFullYear() + 1));
//   if (type === "2 years") return new Date(currentDate.setFullYear(currentDate.getFullYear() + 2));
// };

import Membership from "../models/membership.js";

export const getAllMemberships = async (req, res) => {
  try {
    const memberships = await Membership.find().populate("userId", "name email");
    res.json(memberships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


