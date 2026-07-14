import "./ProductGrid.css";

import ProductListCard from "../ProductCards/productListCard";

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="no-products">
        <h3>No Products Found</h3>
        <p>Try changing your filters.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductListCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;