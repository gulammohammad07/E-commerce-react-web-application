import axios from "axios";

const BASE_URL = "http://localhost:5000/cart";

// Get Cart
export const getCart = () => {
  return axios.get(BASE_URL);
};

// Add To Cart
export const addToCart = (cartItem) => {
  return axios.post(BASE_URL, cartItem);
};

// Update Quantity
export const updateCartQuantity = (cartId, quantity) => {
  return axios.put(`${BASE_URL}/${cartId}`, {
    quantity,
  });
};

// Remove Item
export const removeCartItem = (cartId) => {
  return axios.delete(`${BASE_URL}/${cartId}`);
};

// Clear Cart
export const clearCart = () => {
  return axios.delete(BASE_URL);
};