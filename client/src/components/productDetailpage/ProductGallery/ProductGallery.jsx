import { useState } from "react";
import "./ProductGallery.css";

const ProductGallery = ({ images = [], productName }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const currentImage = selectedImage || images[0];

  return (
    <div className="product-gallery">
      <div className="thumbnail-list">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${
              currentImage === image ? "active" : ""
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt={`${productName}-${index}`} />
          </div>
        ))}
      </div>

      <div className="main-image">
        {currentImage && (
          <img
            src={currentImage}
            alt={productName}
          />
        )}
      </div>
    </div>
  );
};

export default ProductGallery;