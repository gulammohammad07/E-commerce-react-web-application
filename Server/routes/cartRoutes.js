import express from "express";

import {
  getCart,
  createCartItem,
  updateCartItem,
  deleteCartItem,
  deleteCart,
} from "../controllers/cartController.js";

const router = express.Router();

/**
 * GET Cart
 */
router.get("/", getCart);

/**
 * Add Item
 */
router.post("/", createCartItem);

/**
 * Update Quantity
 */
router.put("/:cartId", updateCartItem);

/**
 * Remove Item
 */
router.delete("/:cartId", deleteCartItem);

/**
 * Clear Cart
 */
router.delete("/", deleteCart);

export default router;