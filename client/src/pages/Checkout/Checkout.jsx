// import { Link } from "react-router-dom";
import { FaCheckCircle, FaMapMarkerAlt, FaCreditCard } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import "./Checkout.css";
import { useEffect, useRef, useState } from "react";
import dropin from "braintree-web-drop-in";
import { getClientToken, processPayment } from "../../Services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const { cart } = useCart();
  const { user } = useAuth();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState(null);

  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const dropinContainer = useRef(null);
  useEffect(() => {
    const loadToken = async () => {
      const res = await getClientToken();
      setClientToken(res.data.clientToken);
    };

    loadToken();
  }, []);

  useEffect(() => {
    console.log("Client Token:", clientToken);
    if (!clientToken || !dropinContainer.current) return;
    console.log("Creating Drop-in...");

    let dropinInstance;

    dropin.create(
      {
        authorization: clientToken,
        container: dropinContainer.current,
      },
      (error, createdInstance) => {
        if (error) {
          console.error(error);
          return;
        }

        dropinInstance = createdInstance;
        console.log("DropIn Created");
        setInstance(createdInstance);
      },
    );

    return () => {
      if (dropinInstance) {
        dropinInstance.teardown();
      }
    };
  }, [clientToken]);

  const handlePayment = async () => {
    if (!instance) {
      alert("Payment UI is still loading.");
      return;
    }

    try {
      // Get payment nonce from Braintree
      const { nonce } = await instance.requestPaymentMethod();

      // Process payment
      const res = await processPayment({
        nonce,
        amount: cart.total,
      });

      console.log("Payment Response:", res.data);

      // Check payment success
      if (!res.data.success) {
        toast.error("Payment Failed");
        return;
      }

      // Create Order
      const order = {
        orderId: `ORD-${Date.now()}`,
        orderDate: new Date().toLocaleDateString(),
        address,
        paymentMethod: "",
        status: "Shipped",
        paymentStatus: "Paid",
        estimatedDelivery: "3 to 4 days",
        items: cart.items,
        subtotal: cart.subtotal,
        tax: cart.tax,
        shipping: cart.shipping,
        total: cart.total,
      };

      // Save latest order
      localStorage.setItem("latestOrder", JSON.stringify(order));

      // Save all orders
      const orders =
        JSON.parse(localStorage.getItem("orders")) || [];

      orders.unshift(order);

      localStorage.setItem(
        "orders",
        JSON.stringify(orders)
      );

      console.log(
        "Orders Saved:",
        JSON.parse(localStorage.getItem("orders"))
      );

      // Optional: Clear Cart
      // await clearCart();

      toast.success("Order Placed Successfully!");

      navigate("/order-success");
    } catch (error) {
      console.error("Payment Error:", error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <main className="checkout-page">
      <section className="checkout-header">
        <span>
          <FaCheckCircle />
          Logged in
        </span>
        <h1>Checkout</h1>
        <p>
          Welcome {user?.name || "there"}, your account is ready for the next
          step.
        </p>
      </section>

      <section className="checkout-grid">
        <div className="checkout-section">
          <h2>
            <FaMapMarkerAlt />
            Delivery Address
          </h2>

          <form className="address-form">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={address.firstName}
              onChange={handleChange}
            />

            <input type="text" name="lastName" placeholder="Last Name" value={address.lastName}
              onChange={handleChange} />

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={address.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={address.phone}
              onChange={handleChange}
            />



            <input type="text" name="city" placeholder="City" value={address.city}
              onChange={handleChange} />

            <input type="text" name="state" placeholder="State" value={address.state}
              onChange={handleChange} />

            <input type="text" name="pincode" placeholder="Pincode" value={address.pincode}
              onChange={handleChange} />

            <input type="text" name="country" placeholder="Country" value={address.country}
              onChange={handleChange} />
          </form>
        </div>

        <div className="checkout-section">
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
          </aside>
          <h2>
            <FaCreditCard />
            Payment
          </h2>
          <div ref={dropinContainer}></div>

          <button
            className="place-order-btn"
            onClick={handlePayment}
            disabled={!instance}
          >
            Place Order
          </button>
        </div>

        
      </section>
    </main>
  );
};

export default Checkout;
