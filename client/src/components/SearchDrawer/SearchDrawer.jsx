import { FaTimes, FaSearch } from "react-icons/fa";
import "./SearchDrawer.css";
import { useEffect, useState } from "react";
import ProductListCard from "../ProductCards/productListCard";
import { getAllProducts } from "../../Services/api";

const SearchDrawer = ({ isOpen, onClose }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    )
    .slice(0, 4);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    };

    if (isOpen) {
      fetchProducts();
    }
  }, [isOpen]);
  return (
    <>
      {/* Overlay */}
      <div
        className={`search-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`search-drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <div className="drawer-search">
            <FaSearch />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus={isOpen}
            />
          </div>

          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="drawer-content">
          <h3>TRENDING SEARCHES</h3>

          <ul className="trending-list">
            <li>Winter Wear</li>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Party Wear</li>
          </ul>

          <hr />

          <h2>SUGGESTED FOR YOU</h2>

          <div className="suggested-products">
            {filteredProducts.map((product) => (
              <ProductListCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchDrawer;
