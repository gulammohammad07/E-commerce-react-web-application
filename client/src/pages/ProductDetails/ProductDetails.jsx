import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import "./ProductDetails.css";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { getProductById } from "../../Services/api";
import ProductGallery from "../../components/productDetailpage/ProductGallery/ProductGallery";
import ProductInfo from "../../components/productDetailpage/ProductInfo/ProductInfo";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

const ProductDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productFromListing = state?.product;

    // The PLP has already loaded this object, so render it immediately after
    // navigation instead of depending on a second request to populate the PDP.
    if (productFromListing && String(productFromListing.id) === String(id)) {
      setProduct(productFromListing);
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      setLoading(true);

      try {
        const response = await getProductById(id);

        // Supports both the MockAPI response (the product directly) and the
        // local API response ({ success, product }) for direct page visits.
        setProduct(response.data.product ?? response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, state]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="product-details-page">
      <Breadcrumb productName={product.name} />

      <div className="pdp-container">
    <ProductGallery
        images={product.images}
        productName={product.name}
    />

    <ProductInfo
        product={product}
    />
</div>

      <ProductCarousel />
    </div>
  );
};

export default ProductDetails;
