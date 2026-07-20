import { FaCheckCircle, FaMapMarkerAlt, FaCreditCard } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderDetails.css";

const OrderDetails = () => {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const latestOrder = JSON.parse(localStorage.getItem("latestOrder"));

    if (!latestOrder) {
      navigate("/");
      return;
    }

    setOrder(latestOrder);
  }, [navigate]);

  if (!order) return null;

  return (
    <main className="order-details-page">
      <div className="order-container">

        {/* Header */}

        <div className="order-header">
          <h1>Order #{order.orderId}</h1>

          <span className="status confirmed">
            <FaCheckCircle />
            Confirmed
          </span>
        </div>

        <div className="order-info">
          <p>
            <strong>Order Date:</strong> {order.orderDate}
          </p>

          <p>
            <strong>Payment Status:</strong>
            <span className="paid"> Paid</span>
          </p>
        </div>

        {/* Timeline */}

        <div className="timeline">

          <div className="step active">
            <FaCheckCircle />
            <span>Confirmed</span>
          </div>

          <div className="line"></div>

          <div className="step">
            🚚
            <span>Shipped</span>
          </div>

          <div className="line"></div>

          <div className="step">
            📦
            <span>Out for Delivery</span>
          </div>

          <div className="line"></div>

          <div className="step">
            🏠
            <span>Delivered</span>
          </div>

        </div>

        <div className="order-grid">

          {/* Products */}

          <div className="card">

            <h2>Order Items</h2>

            {order.items.map((item) => (
              <div className="product" key={item.cartId}>

                <img src={item.image} alt={item.name} />

                <div className="product-info">
                  <h3>{item.name}</h3>

                  <p>
                    Size : {item.size}
                  </p>

                  <p>
                    Color : {item.color}
                  </p>

                  <p>
                    Qty : {item.quantity}
                  </p>
                </div>

                <strong>₹{item.price}</strong>

              </div>
            ))}

          </div>

          {/* Address */}

          <div className="card">

            <h2>
              <FaMapMarkerAlt />
              Delivery Address
            </h2>

            <p>Touqeer ansari</p>
            <p>Flat 101, XYZ Apartment</p>
            <p>Mumbai, Maharashtra</p>
            <p>400001</p>
            <p>India</p>

          </div>

          {/* Payment */}

          <div className="card">

            <h2>
              <FaCreditCard />
              Payment Details
            </h2>

            <p>
              Method :
              <strong> {order.paymentMethod}</strong>
            </p>

            <p>
              Status :
              <span className="paid"> Paid</span>
            </p>

          </div>

          {/* Price */}

          <div className="card">

            <h2>Price Details</h2>

            <div className="price-row">
              <span>Subtotal</span>

              <strong>₹{order.subtotal}</strong>
            </div>

            <div className="price-row">
              <span>Shipping</span>

              <strong>₹{order.shipping}</strong>
            </div>

            <div className="price-row">
              <span>Tax</span>

              <strong>₹{order.tax}</strong>
            </div>

            <hr />

            <div className="price-row total">

              <span>Total Paid</span>

              <strong>₹{order.total}</strong>

            </div>

          </div>

        </div>

        <button
          className="continue-btn"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>

      </div>
    </main>
  );
};

export default OrderDetails;