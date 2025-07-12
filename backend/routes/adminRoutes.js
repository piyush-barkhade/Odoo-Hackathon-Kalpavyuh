import express from "express";
import { isAdmin, isAuthenticated } from "../middleware/authMiddleware.js";
import {
  approveItem,
  getAllUsers,
  getPendingItems,
  rejectItem,
} from "../controllers/adminController.js";

const router = express.Router();

router.get("/pending-items", isAuthenticated, isAdmin, getPendingItems);
router.post("/approve/:id", isAuthenticated, isAdmin, approveItem);
router.delete("/reject/:id", isAuthenticated, isAdmin, rejectItem);
router.get("/users", isAuthenticated, isAdmin, getAllUsers);

export default router;
