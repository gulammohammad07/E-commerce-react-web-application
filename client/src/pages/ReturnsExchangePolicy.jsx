import "./Policy.css";

const ReturnsExchangePolicy = () => {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1>Returns & Exchange Policy</h1>

        <p className="policy-intro">
          We want you to have the best shopping experience. If you are not
          completely satisfied with your purchase, you can request a return or
          exchange by following the policy below.
        </p>

        <section className="policy-section">
          <h2>Return Eligibility</h2>
          <ul>
            <li>Return requests must be raised within <strong>7 days</strong> of delivery.</li>
            <li>The product must be unused, unwashed, and in its original condition.</li>
            <li>All original tags, labels, and packaging must be intact.</li>
            <li>Products showing signs of use or damage will not be accepted.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Exchange Policy</h2>
          <ul>
            <li>Exchanges are subject to product availability.</li>
            <li>You can request an exchange for a different size of the same product.</li>
            <li>If the requested size is unavailable, you may choose another product of equal value or opt for a refund/store credit (if applicable).</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Non-Returnable Items</h2>
          <ul>
            <li>Products purchased during clearance or final sale.</li>
            <li>Gift cards.</li>
            <li>Products that have been used, washed, or altered.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Return Process</h2>
          <ol>
            <li>Submit a return request from your account or contact customer support.</li>
            <li>Once approved, our courier partner will schedule a pickup.</li>
            <li>Pack the product securely with all tags attached.</li>
            <li>After successful quality inspection, your refund or exchange will be processed.</li>
          </ol>
        </section>

        <section className="policy-section">
          <h2>Refund Policy</h2>
          <ul>
            <li>Refunds are initiated within <strong>24–48 hours</strong> after the returned product passes quality inspection.</li>
            <li>The amount is credited within <strong>5–7 working days</strong>, depending on your bank or payment provider.</li>
            <li>For Cash on Delivery (COD) orders, refunds are processed to the customer's bank account.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Damaged or Incorrect Products</h2>
          <p>
            If you receive a damaged, defective, or incorrect product, please
            contact us within <strong>48 hours</strong> of delivery along with
            clear photos of the product and packaging.
          </p>
        </section>

        <section className="policy-section">
          <h2>Need Help?</h2>
          <p>
            <strong>Email:</strong> support@yourstore.com
          </p>
          <p>
            <strong>Phone:</strong> +91 98765 43210
          </p>
        </section>

        <section className="policy-section note">
          <h2>Important Note</h2>
          <p>
            We reserve the right to reject return or exchange requests that do
            not meet the above conditions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ReturnsExchangePolicy;