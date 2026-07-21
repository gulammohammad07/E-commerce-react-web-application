import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccountLayout from "./AccountLayout";
import "./AccountOrder.css";

const AccountOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    console.log("Orders from LocalStorage:", storedOrders);

    setOrders(storedOrders);
  }, []);

  return (
    <AccountLayout title="My Orders">
      <div className="orders-container">
        {orders.length === 0 ? (
          <div className="empty-orders">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
              alt="No Orders"
            />

            <h2>No Orders Yet</h2>

            <p>Looks like you haven't placed any orders yet.</p>

            <Link to="/" className="shop-btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          orders.map((order) => {
            const firstItem = order.items?.[0];

            return (
              <Link
                key={order.orderId}
                to={`/account/orders/${order.orderId}`}
                className="order-card"
              >
                <div className="order-product">
                  <img
                    src={firstItem?.image}
                    alt={firstItem?.name}
                    className="order-product-image"
                  />
                </div>

                <div className="order-left">
                  <h3>{firstItem?.name}</h3>

                  <p>
                    <strong>Order ID:</strong> {order.orderId}
                  </p>

                  <p>
                    <strong>Order Date:</strong> {order.orderDate}
                  </p>

                  <p>
                    <strong>Items:</strong> {order.items.length}
                  </p>
                </div>

                <div className="order-right">
                  <span className="order-status">
                    {order.paymentStatus}
                  </span>

                  <h3>₹{order.total}</h3>

                  <small>{order.paymentMethod}</small>
                </div>
                <p
                  className={`order-status ${order.isCancelled ? "cancelled" : "active"
                    }`}
                >
                  {order.isCancelled ? "Cancelled" : "Active"}
                </p>

              </Link>

            );
          })
        )}
      </div>
    </AccountLayout>
  );
};

export default AccountOrders;