import express from "express";
import { getMegaMenu } from "../controllers/megaMenuController.js";

console.log("Mega Menu Route Loaded");

const router = express.Router();

router.get("/", getMegaMenu);

export default router;