import { Link } from "react-router-dom";
import { FaBoxOpen, FaShoppingCart, FaSearch, FaChevronDown, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import "./Navbar.css";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

function Navbar() {
  const { cart } = useCart();
  const { isAuthenticated, logout } = useAuth();

  const cartCount = cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">LittleTrendz</Link>
      </div>

      <ul className="nav-links">
        <li className="dropdown">
          <Link to="/">Shop <FaChevronDown className="dropdown-icon" /></Link>

          <ul className="dropdown-menu">
            <li><Link to="/products">Boys</Link></li>
            <li><Link to="/products">Girls</Link></li>
            <li><Link to="/products">Babies</Link></li>
            <li><Link to="/products">Toddlers</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <Link to="/categories">Categories <FaChevronDown className="dropdown-icon" /></Link>

          <ul className="dropdown-menu">
            <li><Link to="/category/t-shirts">T-Shirts</Link></li>
            <li><Link to="/category/shirts">Shirts</Link></li>
            <li><Link to="/category/dresses">Dresses</Link></li>
            <li><Link to="/category/jeans">Jeans</Link></li>
            <li><Link to="/category/shorts">Shorts</Link></li>
            <li><Link to="/category/hoodies">Hoodies</Link></li>
            <li><Link to="/category/ethnic-wear">Ethnic Wear</Link></li>
            <li><Link to="/category/school-wear">School Wear</Link></li>
            <li><Link to="/category/winter-wear">Winter Wear</Link></li>
          </ul>
        </li>

        <li><Link to="/best-sellers">Best Sellers</Link></li>
        <li><Link to="/new-arrivals">New Arrivals</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search products..." />
        <button>
          <FaSearch />
        </button>
      </div>

      <div className="nav-right">
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </Link>

        {isAuthenticated ? (
          <div className="account-menu">
            <button className="account-trigger" type="button">
              <FaUserCircle />
              My Account
              <FaChevronDown className="account-chevron" />
            </button>

            <div className="account-dropdown">
              <Link to="/account">
                <FaUserCircle />
                My Profile
              </Link>

              <Link to="/account/orders">
                <FaBoxOpen />
                My Orders
              </Link>

              <button type="button" onClick={logout}>
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
