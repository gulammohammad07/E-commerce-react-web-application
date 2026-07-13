import products from "../data/products.js";

// Get All Products
export const getAllProducts = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            total: products.length,
            products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};

// Get Product By ID
export const getProductById = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const product = products.find((item) => item.id === id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};