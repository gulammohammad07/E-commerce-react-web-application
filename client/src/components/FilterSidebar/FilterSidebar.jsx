import "./FilterSidebar.css";

const FilterSidebar = ({
  products = [],
  filters,
  setFilters,
}) => {

  const categories = [...new Set(products.map(p => p.category).filter(Boolean))];
  const ageGroups = [...new Set(products.map(p => p.ageGroup).filter(Boolean))];
  const colors = [...new Set(products.map(p => p.color).filter(Boolean))];
  const sizes = [
  ...new Set(
    products.flatMap(product => product.size || [])
  )
];

  const handleCheckbox = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  const hasActiveFilters =
  filters.category.length > 0 ||
  filters.ageGroup.length > 0 ||
  filters.size.length > 0 ||
  filters.color.length > 0 ||
  filters.price < 5000; // replace 5000 with your default max price

  return (
    <div className="filter-sidebar">


      {/* Category */}

      <div className="filter-section">
        <h4>Category</h4>

        {categories.map(category => (
          <label key={category} className="filter-option">

            <input
              type="checkbox"
              checked={filters.category.includes(category)}
              onChange={() => handleCheckbox("category", category)}
            />

            {category}

          </label>
        ))}
      </div>

      {/* Age */}

      <div className="filter-section">
        <h4>Age Group</h4>

        {ageGroups.map(age => (
          <label key={age} className="filter-option">

            <input
              type="checkbox"
              checked={filters.ageGroup.includes(age)}
              onChange={() => handleCheckbox("ageGroup", age)}
            />

            {age}

          </label>
        ))}
      </div>

      {/* Size */}

      <div className="filter-section">
        <h4>Size</h4>

        {sizes.map(size => (
          <label key={size} className="filter-option">

            <input
              type="checkbox"
              checked={filters.size.includes(size)}
              onChange={() => handleCheckbox("size", size)}
            />

            {size}

          </label>
        ))}
      </div>

      {/* Colors */}

      <div className="filter-section">

        <h4>Color</h4>

        <div className="color-list">

          {colors.map(color => (
            <span
              key={color}
              className={`color-circle ${
                filters.color.includes(color) ? "active" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleCheckbox("color", color)}
            />
          ))}

        </div>

      </div>

      {/* Price */}

      <div className="filter-section">

        <h4>Price</h4>

        <input
          type="range"
          min="0"
          max="5000"
          value={filters.price}
          onChange={(e) =>
            setFilters({
              ...filters,
              price: Number(e.target.value),
            })
          }
        />

        <div className="price-value">
          ₹0 - ₹{filters.price}
        </div>

      </div>

     
     {hasActiveFilters && (
  <div className="filter-actions">
    <button className="apply-btn">
      Apply Filters
    </button>

    <button
      className="clear-btn"
      onClick={() =>
        setFilters({
          category: [],
          ageGroup: [],
          size: [],
          color: [],
          price: 5000,
        })
      }
    >
      Clear Filters
    </button>
  </div>
)}

    </div>
  );
};

export default FilterSidebar;