import { Link } from "react-router-dom";
import {  FaStar } from "react-icons/fa";
import "./productListCard.css";
import useCart from "../../hooks/useCart";
import { toast } from "react-toastify";
const ProductListCard = ({ product }) => {
  const { addToCart } = useCart();
  const [submitting, setSubmitting] = useState(false);

  const handleAddToCart = async () => {
    if (submitting) return;
    setSubmitting(true);
    try {
      await addToCart({
        productId: product.id,
        quantity: 1,
        size: product.size[0],
        color: product.color,
      });

      toast.success("Product added to cart!");
    } catch (error) {
      toast.error("Failed to add product.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="product-card">



      

      {/* Product Image */}

      <Link
        to={`/product/${product.id}`}
        className="product-image"
      >
        <img
          src={product.images?.[0]}
          alt={product.name}
        />
      </Link>

      {/* Product Details */}

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

        {/* Rating */}

        <div className="rating-row">

          <div className="stars">
            <FaStar />
            <span>{product.rating}</span>
          </div>

          {/* <span className="reviews">
            ({product.reviews})
          </span> */}

        </div>

        {/* Price */}

        <div className="price-row">

          <span className="sale-price">
            ₹{product.price}
          </span>

          {product.price > product.discountPrice && (
            <span className="original-price">
              ₹{product.price}
            </span>
          )}

        </div>


        

        {/* Button */}

        <button
          className="cart-btn"
          disabled={product.stock === 0}
           onClick={handleAddToCart}
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
};

export default ProductListCard;