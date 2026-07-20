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

  const navigate = useNavigate();

  const dropinContainer = useRef(null);
  useEffect(() => {
    const loadToken = async () => {
      const res = await getClientToken();
      console.log("dmfdofmo", res);
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
      paymentMethod: "Credit Card",
      paymentStatus: "Paid",
      estimatedDelivery: "24 Jul - 27 Jul",
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
              placeholder="First Name"
              defaultValue="Touqeer"
            />

            <input type="text" placeholder="Last Name" defaultValue="Khan" />

            <input
              type="email"
              placeholder="Email"
              defaultValue="touqeer@gmail.com"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              defaultValue="9876543210"
            />

            <textarea
              placeholder="Street Address"
              defaultValue="Flat 101, XYZ Apartment"
            />

            <input type="text" placeholder="City" defaultValue="Mumbai" />

            <input type="text" placeholder="State" defaultValue="Maharashtra" />

            <input type="text" placeholder="Pincode" defaultValue="400001" />

            <input type="text" placeholder="Country" defaultValue="India" />
          </form>
        </div>

        <div className="checkout-section">
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

        {/* <aside className="checkout-summary">
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
        </aside> */}
      </section>
    </main>
  );
};

export default Checkout;
