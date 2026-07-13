import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-about">
          <h2>LittleTrendz</h2>
          <p>
            Quality products for every lifestyle.
            Discover the latest trends for Men,
            Women, and Kids.
          </p>
        </div>

        {/* Shop */}
        <div className="footer-column">
          <h3>Shop</h3>
          <ul>
            <li><a href="/">Boys</a></li>
            <li><a href="/">Girls</a></li>
            <li><a href="/">babies</a></li>
            <li><a href="/">New Arrivals</a></li>
            <li><a href="/">Best Sellers</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div className="footer-column">
          <h3>Customer Support</h3>
          <ul>
            <li><a href="/">Contact Us</a></li>
            <li><a href="/">FAQs</a></li>
            <li><a href="/">Shipping Policy</a></li>
            <li><a href="/">Return Policy</a></li>
            <li><a href="/">Size Guide</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Our Story</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms & Conditions</a></li>
          </ul>
        </div>

      </div>

     <div className="footer-bottom">
        <p>© {currentYear} LittleTrendz. All Rights Reserved.</p>
</div>
    </footer>
  );
}

export default Footer;