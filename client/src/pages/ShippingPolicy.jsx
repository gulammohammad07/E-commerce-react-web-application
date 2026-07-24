import "./Policy.css";

const ShippingPolicy = () => {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1>Shipping Policy</h1>

        <p className="policy-intro">
          <strong>Shipping in India Only</strong>
        </p>

        <p>
          We currently ship orders only within India through our trusted courier
          partners.
        </p>

        <section className="policy-section">
          <h2>How long will it take for my order to be delivered?</h2>
          <p>
            Once your order has been shipped, the delivery typically takes
            <strong> 5–7 business days.</strong>
          </p>
        </section>

        <section className="policy-section">
          <h2>Do you charge for delivery?</h2>

          <ul>
            <li>
              <strong>Cash on Delivery (COD):</strong> ₹49 shipping charge.
            </li>
            <li>
              <strong>Prepaid Orders:</strong> Free Shipping.
            </li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>
            Can I modify the shipping address of my order before it has been
            shipped?
          </h2>

          <p>
            Address changes may not be possible once the order has been
            processed, as the details are quickly shared with our warehouse for
            packing and shipping.
          </p>

          <p>
            However, minor updates (such as door number or street details) can
            be accommodated if requested within
            <strong> 2 hours </strong>
            of placing the order and before it is fulfilled.
          </p>

          <p>
            For any such requests, please reach out to our support team at the
            earliest, and we'll do our best to assist.
          </p>
        </section>

        <section className="policy-section">
          <h2>How can I track my order?</h2>

          <p>
            You can track your order once it has been dispatched from our
            warehouse. An <strong>Email</strong>, <strong>SMS</strong>, and
            <strong> WhatsApp</strong> notification will be sent with your
            tracking link.
          </p>
        </section>

        <section className="policy-section">
          <h2>What if my order is undelivered?</h2>

          <p>
            If our courier partners are unable to deliver your order due to any
            reason and the package is returned to our warehouse, we will
            initiate your refund as soon as we receive the returned product.
          </p>

          <ul>
            <li>
              Refund initiation within <strong>24–48 hours</strong> after the
              product reaches our warehouse.
            </li>
            <li>
              The amount will reflect in your account within
              <strong> 5–7 working days</strong>, depending on your bank's
              processing timeline.
            </li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>How can I track my Return Status?</h2>

          <p>
            Once your return request is approved, it can take up to
            <strong> 72 hours</strong> for our courier partner to pick up the
            product.
          </p>

          <p>
            You will receive WhatsApp and SMS notifications regarding the return
            pickup.
          </p>

          <p>Please ensure that:</p>

          <ul>
            <li>The product is packed securely.</li>
            <li>All original tags are attached.</li>
            <li>The product is in good condition.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>What if my order shows delivered but I've not received it?</h2>

          <p>
            If your package shows as <strong>Delivered</strong> but you haven't
            received it, don't worry—we're here to help.
          </p>

          <p>
            Please contact our customer support team immediately.
          </p>

          <div className="contact-info">
            <p>
              <strong>Email:</strong> care@dennislingo.com
            </p>

            <p>
              <strong>Phone:</strong> +91 9611719302
            </p>
          </div>
        </section>

        <section className="policy-section note">
          <h2>Quick Note</h2>

          <p>
            To help us investigate delivery-related issues effectively, please
            report any missing package within
            <strong> 24–48 hours</strong> of the delivery date.
          </p>

          <p>
            After this period, we may not be able to raise a dispute with the
            courier partner on your behalf.
          </p>
        </section>
      </div>
    </div>
  );
};
export default ShippingPolicy;
