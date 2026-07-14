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





// GET CATEGORIES
export const getCategories = async (req, res) => {
  try {
    const categories = [...new Set(products.map((item) => item.category))];

    res.json({
      success: true,
      total: categories.length,
      categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET SUB CATEGORIES
export const getSubCategories = async (req, res) => {
  try {
    const subCategories = [
      ...new Set(products.map((item) => item.subCategory)),
    ];

    res.json({
      success: true,
      total: subCategories.length,
      subCategories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET COLORS
export const getColors = async (req, res) => {
  try {
    const colors = [...new Set(products.map((item) => item.color))];

    res.json({
      success: true,
      colors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET AGE GROUPS
export const getAgeGroups = async (req, res) => {
  try {
    const ageGroups = [...new Set(products.map((item) => item.ageGroup))];

    res.json({
      success: true,
      ageGroups,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET SIZES
export const getSizes = async (req, res) => {
  try {
    const sizes = [...new Set(products.flatMap((item) => item.size))];

    res.json({
      success: true,
      sizes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};