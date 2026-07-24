import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
  FaWhatsapp,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaGooglePay,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h1>LittleTrendz</h1>
        <p>Premium Fashion for Little Ones</p>
      </div>

      <div className="footer-grid">
        <div>
          <h3>SHOP</h3>

          <a href="#">Boys</a>
          <a href="#">Girls</a>
          <a href="#">Babies</a>
          <a href="#">New Arrivals</a>
          <a href="#">Best Sellers</a>
        </div>

        <div>
          <h3>CUSTOMER CARE</h3>

          <a href="#">Contact Us</a>
          <a href="#">FAQs</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Returns</a>
          <a href="#">Track Order</a>
        </div>

        <div>
          <h3>CUSTOMER SERVICE</h3>

          <Link to="/shipping-policy">Shipping Policy</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/returns-exchange-policy">Returns & Exchange Policy</Link>
          <Link to="/raise-return-request">Raise a Return Request</Link>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div>
          <h3>ABOUT US</h3>

          <a href="#">Our Story</a>
          <a href="#">Our Mission</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div>
          <h3>FOLLOW US</h3>

          <a href="#">
            <FaInstagram /> Instagram
          </a>
          <a href="#">
            <FaFacebookF /> Facebook
          </a>
          <a href="#">
            <FaPinterestP /> Pinterest
          </a>
          <a href="#">
            <FaYoutube /> YouTube
          </a>
          <a href="#">
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 LittleTrendz. All Rights Reserved.</p>

        <div className="payment-icons">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
          <FaGooglePay />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
