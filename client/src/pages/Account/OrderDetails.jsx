import { FaCheckCircle, FaMapMarkerAlt, FaCreditCard } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderDetails.css";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { orderTimeline } from "./OrderTimeline/OrderTimline";

const OrderDetails = () => {
  const [order, setOrder] = useState(null);
  const { orderId } = useParams();
  const navigate = useNavigate();
  const statusOrder = [
    "confirmed",
    "shipped",
    "outForDelivery",
    "delivered",
  ];

 const activeIndex = statusOrder.indexOf(order?.status);




  const handleCancelOrder = () => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this order?"
    );

    if (!confirmCancel) return;

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const updatedOrders = orders.map((item) =>
      item.orderId === order.orderId
        ? {
          ...item,
          isCancelled: true,
          cancelledAt: new Date().toLocaleString(),
        }
        : item
    );

    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    const updatedOrder = updatedOrders.find(
      (item) => item.orderId === order.orderId
    );

    localStorage.setItem("latestOrder", JSON.stringify(updatedOrder));

    setOrder(updatedOrder);

    toast.success("Order cancelled successfully!");
  };

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const currentOrder = orders.find(
      (item) => item.orderId === orderId
    );

    if (!currentOrder) {
      navigate("/account/orders");
      return;
    }

    setOrder(currentOrder);
  }, [orderId, navigate]);

  if (!order) return null;

  return (
    <main className="order-details-page">
      <div className="order-container">

        {/* Header */}

        <div className="order-header">
          <h1>Order #{order.orderId}</h1>

        <span className={`status ${order.status}`}>
  <FaCheckCircle />
  {order.status}
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
  {orderTimeline.map((step, index) => (
    <React.Fragment key={step.id}>
      <div
        className={`step ${
          index <= activeIndex ? "active" : ""
        }`}
      >
        <span className="icon">{step.icon}</span>
        <span>{step.title}</span>
      </div>

      {index !== orderTimeline.length - 1 && (
        <div
          className={`line ${
            index < activeIndex ? "active-line" : ""
          }`}
        />
      )}
    </React.Fragment>
  ))}
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

            <p>
              {order?.address?.firstName} {order?.address?.lastName}
            </p>

            <p>{order?.address?.street}</p>

            <p>
              {order?.address?.city}, {order?.address?.state}
            </p>

            <p>{order?.address?.pincode}</p>

            <p>{order?.address?.country}</p>

            <p>{order?.address?.phone}</p>

            <p>{order?.address?.email}</p>
          </div>

          {/* Payment */}

          <div className="card">

            <h2>
              <FaCreditCard />
              Payment Details
            </h2>

            {/* <p>
              Method :
              <strong> {order.paymentMethod}</strong>
            </p> */}

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

        <div className="btns">
          {order?.isCancelled ? (

            <div className="cancel-order-message">
              <h3>❌ Order Cancelled</h3>
              <p>This order has been cancelled successfully.</p>

              <p>
                <strong>Cancelled On:</strong> {order.cancelledAt}
              </p>
            </div>
          ) : (
            <button onClick={handleCancelOrder} className="cancel-btn">
              Cancel Order
            </button>
          )}

          <button
            className="continue-btn"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>





      </div>
    </main>
  );
};

export default OrderDetails;