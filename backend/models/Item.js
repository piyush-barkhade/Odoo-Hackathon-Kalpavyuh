import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  type: String,
  size: String,
  condition: String,
  tags: [String],
  imageUrl: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: {
    type: String,
    enum: ["available", "pending", "swapped"],
    default: "available",
  },
  approved: { type: Boolean, default: false },
});

export default mongoose.model("Item", itemSchema);
