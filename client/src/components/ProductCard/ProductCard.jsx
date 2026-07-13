import "./ProductCard.css";
import { FaShoppingCart } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      {product.bestSeller && (
        <span className="badge">Best Seller</span>
      )}

      <div className="product-image">
        {/* <img src={product.image} alt={product.name} /> */}
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <div className="bottom-row">
          <h4>₹{product.price}</h4>

          <button>
            Add to Cart <FaShoppingCart />
          </button>
        </div>

      </div>

    </div>
  );
}

export default ProductCard;