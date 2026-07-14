import { useState } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import "./ProductInfo.css";
import useCart from "../../../hooks/useCart";
import { toast } from "react-toastify";
const ProductInfo = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart } = useCart();
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




const handleAddToCart = async () => {
  // if (!selectedSize) {
  //   alert("Please select a size");
  //   return;
  // }

  try {
    await addToCart({
      productId: product.id,
      quantity,
      size: selectedSize,
      color: product.color,
    });

    toast.success("Product added to cart!");
  } catch (err) {
    console.error(err);
  }
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
          ₹{product.price}
        </span>

        {product.oldPrice && (
          <span className="old-price">
            ₹{product.oldPrice}
          </span>
        )}

      </div>

      {/* Color */}

      <div className="info-section">

        <h4>Color</h4>

        <span className="color-name">
          {product.color}
        </span>

      </div>

      {/* Size */}

      <div className="info-section">

        <h4>Select Size</h4>

        <div className="size-list">

          {product.size?.map((size) => (
            <button
              key={size}
              className={`size-btn ${
                selectedSize === size ? "active" : ""
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}

        </div>

      </div>

      {/* Quantity */}

      <div className="info-section">

        <h4>Quantity</h4>

        <div className="quantity-box">

          <button onClick={decreaseQty}>
            -
          </button>

          <span>{quantity}</span>

          <button onClick={increaseQty}>
            +
          </button>

        </div>

      </div>

      {/* Buttons */}

      <div className="action-buttons">

        <button
          className="cart-button"
          onClick={handleAddToCart}
        >
          <FaShoppingCart />
          Add To Cart
        </button>

        {/* <button className="wishlist-button">
          <FaHeart />
          Wishlist
        </button> */}

      </div>

    </div>
  );
};

export default ProductInfo;