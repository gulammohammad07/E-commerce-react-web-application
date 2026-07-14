import products from "../data/products.js";
import cart from "../data/cartData.js";

// Get Cart
export const getCart = () => {
  return cart;
};

// Add To Cart
export const addToCart = ({
  productId,
  quantity = 1,
  size,
  color,
}) => {
  const product = products.find(
    (item) => Number(item.id) === Number(productId)
  );

  if (!product) {
    throw new Error("Product not found");
  }

  // Check if same product already exists
  const existingItem = cart.find(
    (item) =>
      item.productId === productId &&
      item.size === size &&
      item.color === color
  );

  if (existingItem) {
    existingItem.quantity += quantity;
    return existingItem;
  }

  const cartItem = {
    cartId: Date.now(),
    productId: product.id,
    name: product.name,
    image: product.images[0],
    price: product.price,
    size,
    color,
    quantity,
  };

  cart.push(cartItem);

  return cartItem;
};

// Update Quantity
export const updateQuantity = (cartId, quantity) => {
  const item = cart.find(
    (item) => item.cartId === Number(cartId)
  );

  if (!item) {
    throw new Error("Cart item not found");
  }

  item.quantity = quantity;

  return item;
};

// Remove Item
export const removeItem = (cartId) => {
  const index = cart.findIndex(
    (item) => item.cartId === Number(cartId)
  );

  if (index === -1) {
    throw new Error("Cart item not found");
  }

  cart.splice(index, 1);
};

// Clear Cart
export const clearCart = () => {
  cart.length = 0;
};

// Cart Summary
export const getCartSummary = () => {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const tax = +(subtotal * 0.1).toFixed(2);

  const shipping = subtotal > 0 ? 0 : 0;

  return {
    items: cart,
    subtotal,
    tax,
    shipping,
    total: subtotal + tax + shipping,
  };
};