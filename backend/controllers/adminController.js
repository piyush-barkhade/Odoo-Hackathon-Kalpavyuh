import Item from "../models/Item.js";
import User from "../models/User.js";

export const getPendingItems = async (req, res) => {
  try {
    const items = await Item.find({ approved: false });
    res.json(items);
  } catch (error) {
    console.error("Error fetching pending items:", error);
    res.status(500).json({ message: "Failed to fetch pending items" });
  }
};

export const approveItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    item.approved = true;
    await item.save();
    res.json({ message: "Item approved" });
  } catch (error) {
    console.error("Error approving item:", error);
    res.status(500).json({ message: "Failed to approve item" });
  }
};

export const rejectItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    await item.deleteOne();
    res.json({ message: "Item rejected and removed" });
  } catch (error) {
    console.error("Error rejecting item:", error);
    res.status(500).json({ message: "Failed to reject item" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.json(users);
    console.log("Fetched all users successfully");
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};
