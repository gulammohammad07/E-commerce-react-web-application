import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getOrderById } from "../../Services/api";
import AccountLayout from "./AccountLayout";

const OrderDetails = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const loadOrder = async () => {
      try {
        const response = await getOrderById(orderId);
        setOrder(response.data.data);
      } catch (error) {
        console.error(error);
        toast.error("Unable to load order details.");
      }
    };

    loadOrder();
  }, [orderId]);

  if (!order) {
    return (
      <AccountLayout title="Order Details">
        <p className="account-muted">Loading order...</p>
      </AccountLayout>
    );
  }

  return (
    <AccountLayout title={`Order ${order.id}`}>
      <div className="order-detail">
        <div className="order-detail-top">
          <span>{order.status}</span>
          <strong>₹{order.total}</strong>
        </div>

        <p className="account-muted">Placed on {order.date}</p>
        <p className="account-muted">Shipping to {order.shippingAddress}</p>

        <div className="order-items">
          {order.items.map((item) => (
            <div key={item.name}>
              <span>{item.name} x {item.quantity}</span>
              <strong>₹{item.price}</strong>
            </div>
          ))}
        </div>

        <Link className="account-back-link" to="/account/orders">Back to orders</Link>
      </div>
    </AccountLayout>
  );
};

export default OrderDetails;
