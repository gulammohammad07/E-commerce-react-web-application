import "./SortDropdown.css";

const SortDropdown = ({ sortBy, setSortBy }) => {
  return (
    <div className="sort-dropdown">
      <label htmlFor="sort">Sort By :</label>

      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">Featured</option>
        <option value="lowToHigh">Price : Low to High</option>
        <option value="highToLow">Price : High to Low</option>
        <option value="rating">Customer Rating</option>
        <option value="nameAsc">Name : A - Z</option>
        <option value="nameDesc">Name : Z - A</option>
      </select>
    </div>
  );
};

export default SortDropdown;