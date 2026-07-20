import express from "express";
import {
  generateClientToken,
  processPayment,
} from "../controllers/paymentController.js";

const router = express.Router();

router.get("/token", generateClientToken);
router.post("/checkout", processPayment);

export default router;