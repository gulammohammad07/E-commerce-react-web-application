import express from "express";
import {
  completeGoogleLogin,
  getCurrentUser,
  logout,
  startGoogleLogin,
} from "../controllers/authController.js";
import { optionalAuth, requireAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/google", startGoogleLogin);
router.get("/google/callback", completeGoogleLogin);
router.get("/me", optionalAuth, getCurrentUser);
router.post("/logout", requireAuth, logout);

export default router;
