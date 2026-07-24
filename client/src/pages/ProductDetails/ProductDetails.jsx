import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ProductDetails.css";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { getProductById } from "../../Services/api";
import ProductGallery from "../../components/productDetailpage/ProductGallery/ProductGallery";
import ProductInfo from "../../components/productDetailpage/ProductInfo/ProductInfo";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

const ProductDetails = () => {
  const { id } = useParams();
  console.log("ID:", id);

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);

        setProduct(response.data.product);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

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

      <ProductCarousel></ProductCarousel>
    </div>
  );
};

export default ProductDetails;
