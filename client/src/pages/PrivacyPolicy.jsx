import "./Policy.css";

const ShippingPolicy = () => {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1>Shipping Policy</h1>

        <p className="policy-intro">
          We are committed to delivering your orders safely and on time. Please
          read our shipping policy below.
        </p>

        <section className="policy-section">
          <h2>Shipping Coverage</h2>
          <p>
            We currently ship orders only within India. Orders are delivered
            through our trusted courier partners.
          </p>
        </section>

        <section className="policy-section">
          <h2>Order Processing</h2>
          <p>
            Orders are processed within <strong>1–2 business days</strong> after
            payment confirmation. Orders placed on weekends or public holidays
            will be processed on the next working day.
          </p>
        </section>

        <section className="policy-section">
          <h2>Delivery Timeline</h2>
          <p>
            Once your order has been shipped, delivery usually takes
            <strong> 5–7 business days</strong>, depending on your location.
          </p>
        </section>

        <section className="policy-section">
          <h2>Shipping Charges</h2>
          <ul>
            <li>
              <strong>Prepaid Orders:</strong> Free Shipping
            </li>
            <li>
              <strong>Cash on Delivery (COD):</strong> ₹49 shipping charge.
            </li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Change of Shipping Address</h2>
          <p>
            Address changes may not be possible once the order has been
            processed because the shipping details are immediately shared with
            our warehouse.
          </p>

          <p>
            Minor address corrections (door number, apartment number, street
            name, etc.) can be requested within <strong>2 hours</strong> of
            placing the order, subject to order status.
          </p>
        </section>

        <section className="policy-section">
          <h2>Order Tracking</h2>
          <p>
            Once your order is dispatched, you will receive the tracking details
            via <strong>Email, SMS, and WhatsApp</strong>.
          </p>
        </section>

        <section className="policy-section">
          <h2>Undelivered Orders</h2>
          <p>
            If the courier partner is unable to deliver your order and the
            package is returned to our warehouse, your refund will be initiated
            within <strong>24–48 hours</strong> after we receive the returned
            package.
          </p>

          <p>
            The refunded amount will reflect in your account within
            <strong> 5–7 working days</strong>, depending on your bank.
          </p>
        </section>

        <section className="policy-section">
          <h2>Delivery Issues</h2>
          <p>
            If your order status shows <strong>Delivered</strong> but you have
            not received it, please contact our support team within
            <strong> 24–48 hours</strong> of the delivery date.
          </p>

          <p>
            <strong>Email:</strong> support@yourstore.com
            <br />
            <strong>Phone:</strong> +91 98765 43210
          </p>
        </section>

        <section className="policy-section">
          <h2>Delays in Delivery</h2>
          <p>
            Delivery may occasionally be delayed due to bad weather, public
            holidays, natural disasters, courier issues, or other unforeseen
            circumstances. We appreciate your patience in such cases.
          </p>
        </section>

        <section className="policy-section note">
          <h2>Important Note</h2>
          <p>
            Delivery timelines are estimated and may vary based on your
            location. We are not responsible for delays caused by courier
            partners or circumstances beyond our control.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;