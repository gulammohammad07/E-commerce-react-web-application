import categories from "../data/Category.js";

export const getAllCategories = (req, res) => {
    res.status(200).json({
        success: true,
        count: categories.length,
        data: categories
    });
};