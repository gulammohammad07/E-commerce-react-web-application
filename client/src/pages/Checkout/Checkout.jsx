import { Link } from "react-router-dom";
import { FaCheckCircle, FaMapMarkerAlt, FaCreditCard } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import "./Checkout.css";

const Checkout = () => {
  const { cart } = useCart();
  const { user } = useAuth();

  return (
    <main className="checkout-page">
      <section className="checkout-header">
        <span>
          <FaCheckCircle />
          Logged in
        </span>
        <h1>Checkout</h1>
        <p>Welcome {user?.name || "there"}, your account is ready for the next step.</p>
      </section>

      <section className="checkout-grid">
        <div className="checkout-section">
          <h2>
            <FaMapMarkerAlt />
            Delivery details
          </h2>
          <p>Add address collection here when the checkout form is ready.</p>
        </div>

        <div className="checkout-section">
          <h2>
            <FaCreditCard />
            Payment
          </h2>
          <p>Add payment integration here after the order API is connected.</p>
        </div>

        <aside className="checkout-summary">
          <h2>Order total</h2>
          <div>
            <span>Subtotal</span>
            <strong>₹{cart.subtotal}</strong>
          </div>
          <div>
            <span>Tax</span>
            <strong>₹{cart.tax}</strong>
          </div>
          <div>
            <span>Shipping</span>
            <strong>₹{cart.shipping}</strong>
          </div>
          <div className="checkout-total">
            <span>Total</span>
            <strong>₹{cart.total}</strong>
          </div>
          <Link to="/account/orders">View orders</Link>
        </aside>
      </section>
    </main>
  );
};

export default Checkout;
