import {
  addToCart,
  getCartSummary,
  updateQuantity,
  removeItem,
  clearCart,
} from "../services/cartSerivce.js";

/**
 * GET /cart
 */
export const getCart = (req, res) => {
  try {
    const cart = getCartSummary();

    res.status(200).json({
      success: true,
      message: "Cart fetched successfully",
      data: cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * POST /cart
 */
export const createCartItem = (req, res) => {
  try {
    const cartItem = addToCart(req.body);

    res.status(201).json({
      success: true,
      message: "Product added to cart",
      data: cartItem,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * PUT /cart/:cartId
 */
export const updateCartItem = (req, res) => {
  try {
    const { cartId } = req.params;
    const { quantity } = req.body;

    const updatedItem = updateQuantity(cartId, quantity);

    res.status(200).json({
      success: true,
      message: "Quantity updated",
      data: updatedItem,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * DELETE /cart/:cartId
 */
export const deleteCartItem = (req, res) => {
  try {
    const { cartId } = req.params;

    removeItem(cartId);

    res.status(200).json({
      success: true,
      message: "Item removed from cart",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * DELETE /cart
 */
export const deleteCart = (req, res) => {
  try {
    clearCart();

    res.status(200).json({
      success: true,
      message: "Cart cleared successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};