import express from "express";
import { getOrderById, getOrders } from "../controllers/orderController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", requireAuth, getOrders);
router.get("/:orderId", requireAuth, getOrderById);

export default router;
