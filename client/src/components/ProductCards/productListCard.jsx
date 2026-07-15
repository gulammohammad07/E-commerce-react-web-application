import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./productListCard.css";
import useCart from "../../hooks/useCart";

const ProductListCard = ({ product }) => {
  const { addToCart, actionLoading } = useCart();

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      quantity: 1,
      size: product.size?.[0] || "",
      color: product.color,
    });
  };

  return (
    <div className="product-card">
      <Link
        to={`/product/${product.id}`}
        className="product-image"
      >
        <img
          src={product.images?.[0]}
          alt={product.name}
        />
      </Link>

      <div className="product-info">
        <p className="product-brand">
          {product.brand}
        </p>

        <Link
          to={`/product/${product.id}`}
          className="product-title"
        >
          {product.name}
        </Link>

        <div className="rating-row">
          <div className="stars">
            <FaStar />
            <span>{product.rating}</span>
          </div>
        </div>

        <div className="price-row">
          <span className="sale-price">
            Rs.{product.price}
          </span>

          {product.price > product.discountPrice && (
            <span className="original-price">
              Rs.{product.price}
            </span>
          )}
        </div>

        <button
          className="cart-btn"
          disabled={product.stock === 0 || actionLoading}
          onClick={handleAddToCart}
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductListCard;

