import { FaTimes, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SearchDrawer.css";

import { searchProducts } from "../../Services/api";
import SearchProductCard from "../ProductCards/SearchProductCard/SearchProductCard";

const SearchDrawer = ({ isOpen, onClose }) => {

  const [query, setQuery] = useState("");

  const [results, setResults] = useState({
    suggestions: [],
    products: [],
    categories: [],
  });

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setResults({
        suggestions: [],
        products: [],
        categories: [],
      });
      return;
    }



    const timer = setTimeout(async () => {
      try {
        const response = await searchProducts(query);

        setResults({
          suggestions: response.data.suggestions || [],
          products: response.data.products || [],
          categories: response.data.categories || [],
        });
      } catch (err) {
        console.error(err);
        setResults({
          suggestions: [],
          products: [],
          categories: [],
        });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query, isOpen]);



  return (
    <>
      <div
        className={`search-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      />

      <div className={`search-drawer ${isOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <div className="drawer-search">
            <FaSearch />

            <input
              type="text"
              placeholder="Search for kids wear..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus={isOpen}
            />
          </div>

          <button className="close-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="drawer-content">

          {!query && (
            <>
              <h3>TRENDING SEARCHES</h3>

              <ul className="trending-list">
                <li onClick={() => setQuery("T-Shirt")}>T-Shirts</li>
                <li onClick={() => setQuery("Jeans")}>Jeans</li>
                <li onClick={() => setQuery("Frock")}>Frocks</li>
                <li onClick={() => setQuery("Shoes")}>Shoes</li>
              </ul>
            </>
          )}

          {results.suggestions.length > 0 && (
            <>
              <h3>SUGGESTIONS</h3>

              <div className="suggestions">
                {results.suggestions.map((item) => (
                  <p
                    key={item}
                    onClick={() => setQuery(item)}
                  >
                    🔍 {item}
                  </p>
                ))}
              </div>
            </>
          )}

          {results.categories.length > 0 && (
            <>
              <h3>CATEGORIES</h3>

              <div className="categories">
                {results.categories.map((category) => (
                  <Link
                    key={category}
                    to={`/category/${category}`}
                    onClick={onClose}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </>
          )}



          {results.products.length > 0 && (
            <>
              <h3>{query ? "PRODUCTS" : "SUGGESTED FOR YOU"}</h3>

              <div className="suggested-products">
                {results.products.map((product) => (
                  <SearchProductCard
                    key={product.id}
                    product={product}
                    compact
                  />
                ))}
              </div>
            </>
          )}

          {
            query &&
            results.suggestions.length === 0 &&
            results.products.length === 0 &&
            results.categories.length === 0 && (
              <div className="no-search-results">
                <div className="no-search-icon">🔍</div>

                <h3>No results found</h3>

                <p>
                  We couldn't find anything matching
                  <strong> "{query}"</strong>.
                </p>

                <span>Try searching for:</span>

                <div className="search-tags">
                  <button onClick={() => setQuery("T-Shirt")}>T-Shirts</button>
                  <button onClick={() => setQuery("Jeans")}>Jeans</button>
                  <button onClick={() => setQuery("Shirt")}>Shirts</button>
                  <button onClick={() => setQuery("Dress")}>Dresses</button>
                </div>
              </div>
            )}

        </div>
      </div>
    </>
  );
};

export default SearchDrawer;