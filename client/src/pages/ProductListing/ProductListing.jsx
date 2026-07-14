import  { useEffect, useState } from "react";
import { useMemo } from "react";

import "./ProductListing.css";

import { getAllProducts } from "../../Services/api";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import SortDropdown from "../../components/SortDropdown/SortDropdown";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Pagination from "../../components/Pagination/Pagination";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

  const [loading, setLoading] = useState(true);
const [filters, setFilters] = useState({
  category: [],
  ageGroup: [],
  size: [],
  color: [],
  price: 5000,
});

  const [sortBy, setSortBy] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
    try {
      const response = await getAllProducts();

      const data = response.data.products;

      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
    fetchProducts();
  }, []);

  



  // Filter + Sort



const filteredProducts = useMemo(() => {
  let updatedProducts = [...products];

  // Category
  if (filters.category.length > 0) {
    updatedProducts = updatedProducts.filter((product) =>
      filters.category.includes(product.category)
    );
  }

  // Age Group
  if (filters.ageGroup.length > 0) {
    updatedProducts = updatedProducts.filter((product) =>
      filters.ageGroup.includes(product.ageGroup)
    );
  }

  // Size
  if (filters.size.length > 0) {
    updatedProducts = updatedProducts.filter((product) =>
      product.size.some((size) => filters.size.includes(size))
    );
  }

  // Color
  if (filters.color.length > 0) {
    updatedProducts = updatedProducts.filter((product) =>
      filters.color.includes(product.color)
    );
  }

  // Price
  updatedProducts = updatedProducts.filter(
    (product) => product.price <= filters.price
  );

  // Sorting
  switch (sortBy) {
    case "lowToHigh":
      updatedProducts.sort((a, b) => a.price - b.price);
      break;

    case "highToLow":
      updatedProducts.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      updatedProducts.sort((a, b) => b.rating - a.rating);
      break;

    default:
      break;
  }

  return updatedProducts;
}, [products, filters, sortBy]);

  // Pagination
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);

  return (
    <div className="plp-container">
      <Breadcrumb />

      <div className="plp-header">

        <div>
          <h2>All Products</h2>
          <p>{filteredProducts.length} Products Found</p>
        </div>

        <SortDropdown
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

      </div>

      <div className="plp-content">

        <aside className="plp-sidebar">
        <FilterSidebar
    products={products}
    filters={filters}
    setFilters={setFilters}
/>
        </aside>

        <main className="plp-products">

          {loading ? (
            <div className="loading">
              Loading Products...
            </div>
          ) : (
            <>
              <ProductGrid products={currentProducts} />

              <Pagination
                totalProducts={filteredProducts.length}
                productsPerPage={productsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          )}

        </main>

      </div>
    </div>
  );
};

export default ProductListing;