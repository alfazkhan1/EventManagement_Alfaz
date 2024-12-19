// import Product from "../models/Product.js";

// // Add New Item
// export const addNewItem = async (req, res) => {
//   const { vendorId, name, description, price } = req.body;
//   try {
//     const product = new Product({ vendorId, name, description, price });
//     await product.save();
//     res.status(201).json({ message: "Product added successfully!", product });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to add product", error });
//   }
// };

// // Delete Item
// export const deleteItem = async (req, res) => {
//   const { productId } = req.body;
//   try {
//     await Product.findByIdAndDelete(productId);
//     res.status(200).json({ message: "Product deleted successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to delete product", error });
//   }
// };

// // View Items
// export const viewItems = async (req, res) => {
//   const { vendorId } = req.params;
//   try {
//     const products = await Product.find({ vendorId });
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to retrieve items", error });
//   }
// };


import Vendor from "../models/Vendor.js";

export const registerVendor = async (req, res) => {
  const { name, email, services } = req.body;
  try {
    const vendor = new Vendor({ name, email, services });
    await vendor.save();
    res.status(201).json({ message: "Vendor registered successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

