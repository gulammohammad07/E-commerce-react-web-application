import express from "express";
import {
    getAllProducts,
    getProductById,
    getCategories,
    getSubCategories,
    getColors,
    getSizes,
    getAgeGroups,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProducts);

router.get("/:id", getProductById);


router.get("/categories", getCategories);

router.get("/subcategories", getSubCategories);

router.get("/colors", getColors);

router.get("/sizes", getSizes);

router.get("/agegroups", getAgeGroups);

export default router;