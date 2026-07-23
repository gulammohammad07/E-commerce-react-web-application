import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./SearchProductCard.css";

const SearchProductCard = ({ product }) => {
  return (
    <div className="search-product-card">
      <div className="search-image-wrapper">
        {product.stock <= 5 && (
          <span className="stock-badge">Only Few Left</span>
        )}

        <button className="wishlist-btn">
          <FaHeart />
        </button>

        <Swiper
          slidesPerView={1}
          navigation
          loop
          modules={[Navigation]}
          className="search-swiper"
        >
          {product.images?.map((image, index) => (
            <SwiperSlide key={index}>
              <Link to={`/product/${product.id}`}>
                <img src={image} alt={product.name} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="search-size-overlay">
          <span className="size-heading">SELECT SIZE</span>

          <div className="size-list">
            {product.size?.map((size) => (
              <button key={size} className="size-btns">
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="search-card-content">
        <div className="title-row">
          <Link
            to={`/product/${product.id}`}
            className="product-names"
          >
            {product.name}
          </Link>
        </div>

        <div className="price-row">
          <span className="price">₹{product.price}</span>

          {product.discountPrice && (
            <span className="old-price">
              ₹{product.discountPrice}
            </span>
          )}
        </div>

        {/* Color Swatches */}
        {product.colors?.length > 0 && (
  <div className="colors">
    {product.colors.slice(0, 4).map((color, index) => (
      <span
        key={index}
        className="color-dot"
        style={{ backgroundColor: color }}
      />
    ))}

    {product.colors.length > 4 && (
      <span className="more-colors">
        +{product.colors.length - 4}
      </span>
    )}
  </div>
)}
      </div>
    </div>
  );
};

export default SearchProductCard;