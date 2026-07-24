import "./ContactUs.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>

        <p className="intro">
          If you have any questions regarding your order, shipping, returns, or
          products, our customer support team is here to assist you.
        </p>

        <div className="contact-card">
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h3>Office Address</h3>
              <p>
                LittleTrends Fashion Pvt. Ltd.
                <br />
                4th Floor, Horizon Business Park,
                <br />
                Andheri East, Mumbai,
                <br />
                Maharashtra - 400069
              </p>
            </div>
          </div>

          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <div>
              <h3>Customer Support</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-item">
            <FaClock className="icon" />
            <div>
              <h3>Working Hours</h3>
              <p>
                Monday - Saturday
                <br />
                10:00 AM - 7:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;