import { useState } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import "./ProductInfo.css";
import useCart from "../../../hooks/useCart";

const ProductInfo = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart, actionLoading } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      quantity,
      size: selectedSize,
      color: product.color,
    });
  };

  return (
    <div className="product-info">
      <p className="product-category">
        {product.category} / {product.subCategory}
      </p>

      <h1 className="product-name">
        {product.name}
      </h1>

      <div className="product-rating">
        <FaStar className="star-icon" />
        <span>{product.rating}</span>
      </div>

      <div className="price-section">
        <span className="current-price">
          Rs.{product.price}
        </span>

        {product.oldPrice && (
          <span className="old-price">
            Rs.{product.oldPrice}
          </span>
        )}
      </div>

      <div className="info-section">
        <h4>Color</h4>
        <span className="color-name">
          {product.color}
        </span>
      </div>

      <div className="info-section">
        <h4>Select Size</h4>

        <div className="size-list">
          {product.size?.map((size) => (
            <button
              key={size}
              className={`size-btn ${selectedSize === size ? "active" : ""}`}
              onClick={() => setSelectedSize(size)}
              type="button"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="info-section">
        <h4>Quantity</h4>

        <div className="quantity-box">
          <button onClick={decreaseQty} type="button">
            -
          </button>

          <span>{quantity}</span>

          <button onClick={increaseQty} type="button">
            +
          </button>
        </div>
      </div>

      <div className="action-buttons">
        <button
          className="cart-button"
          onClick={handleAddToCart}
          disabled={actionLoading}
          type="button"
        >
          <FaShoppingCart />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
