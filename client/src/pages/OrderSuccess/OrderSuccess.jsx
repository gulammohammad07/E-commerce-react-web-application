import { useEffect, useState } from "react";
import { FaCheckCircle, FaTruck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const latestOrder = localStorage.getItem("latestOrder");

    if (latestOrder) {
      setOrder(JSON.parse(latestOrder));
    } else {
      navigate("/");
    }
  }, [navigate]);

  if (!order) return null;

  return (
    <main className="order-success-page">
      <div className="order-success-card">
        {/* Success Icon */}
        <div className="success-icon">
          <FaCheckCircle />
        </div>

        {/* Heading */}
        <h1>Order Placed Successfully!</h1>

        <p className="success-message">
          Thank you for shopping with TinyThreads.
        </p>

        {/* Order Summary */}
        <div className="order-summary">
          <div className="summary-row">
            <span>Order ID</span>
            <strong>{order.orderId}</strong>
          </div>

          <div className="summary-row">
            <span>Order Date</span>
            <strong>{order.orderDate}</strong>
          </div>

          <div className="summary-row">
            <span>Payment Status</span>
            <strong className="paid">Paid</strong>
          </div>

          <div className="summary-row">
            <span>Payment Method</span>
            <strong>{order.paymentMethod}</strong>
          </div>
        </div>

        {/* Delivery Box */}
        <div className="delivery-box">
          <FaTruck className="truck-icon" />

          <div>
            <h3>Estimated Delivery</h3>
            <p>{order.estimatedDelivery}</p>
          </div>
        </div>

        <p className="confirmation-text">
          You will receive an email confirmation shortly.
        </p>

        {/* Buttons */}
        <button
          className="primary-btn"
          onClick={() =>
            navigate(`/account/orders/${order.orderId}`)
          }
        >
          View Order Details
        </button>

        <button
          className="secondary-btn"
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </button>
      </div>
    </main>
  );
};

export default OrderSuccess;