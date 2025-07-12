import Item from "../models/Item.js";
import User from "../models/User.js";

export const createItem = async (req, res) => {
  try {
    const { title, description, category, type, size, condition, tags } =
      req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";
    const item = await Item.create({
      title,
      description,
      category,
      type,
      size,
      condition,
      tags: tags?.split(",") || [],
      imageUrl,
      owner: req.user.id,
    });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllItems = async (req, res) => {
  const items = await Item.find({ approved: true });
  res.json(items);
};

export const getItemById = async (req, res) => {
  const item = await Item.findById(req.params.id).populate("owner", "name");
  res.json(item);
};

export const requestSwap = async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Item not found" });

  if (item.status !== "available") {
    return res.status(400).json({ message: "Item not available" });
  }

  // Simplified example
  item.status = "pending";
  await item.save();

  const user = await User.findById(req.user.id);
  user.points -= 10;
  await user.save();

  res.json({ message: "Swap requested", newPoints: user.points });
};
