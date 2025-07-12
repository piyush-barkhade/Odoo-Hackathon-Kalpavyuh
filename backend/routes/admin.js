import express from "express";
import {
  authMiddleware,
  adminMiddleware,
} from "../middleware/authMiddleware.js";
import {
  approveItem,
  getPendingItems,
} from "../controllers/adminController.js";

const router = express.Router();

router.get("/pending-items", authMiddleware, adminMiddleware, getPendingItems);
router.post("/approve/:id", authMiddleware, adminMiddleware, approveItem);

export default router;
