import Item from "../models/Item.js";

export const getPendingItems = async (req, res) => {
  const items = await Item.find({ approved: false });
  res.json(items);
};

export const approveItem = async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Item not found" });
  item.approved = true;
  await item.save();
  res.json({ message: "Item approved" });
};
