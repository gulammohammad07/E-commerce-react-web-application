import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getOrders } from "../../Services/api";
import AccountLayout from "./AccountLayout";

const AccountOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const response = await getOrders();
        setOrders(response.data.data);
      } catch (error) {
        console.error(error);
        toast.error("Unable to load orders.");
      }
    };

    loadOrders();
  }, []);

  return (
    <AccountLayout title="Order Details">
      <div className="orders-list">
        {orders.map((order) => (
          <Link className="order-card" to={`/account/orders/${order.id}`} key={order.id}>
            <div>
              <strong>{order.id}</strong>
              <span>{order.date}</span>
            </div>
            <div>
              <span>{order.status}</span>
              <strong>₹{order.total}</strong>
            </div>
          </Link>
        ))}
      </div>
    </AccountLayout>
  );
};

export default AccountOrders;
