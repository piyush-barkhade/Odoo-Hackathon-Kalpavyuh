import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import multer from "multer";
import {
  createItem,
  getAllItems,
  getItemById,
  requestSwap,
} from "../controllers/itemController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", authMiddleware, upload.single("image"), createItem);
router.get("/", getAllItems);
router.get("/:id", getItemById);
router.post("/:id/swap", authMiddleware, requestSwap);

export default router;
