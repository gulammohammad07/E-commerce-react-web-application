import "./Policy.css";

const TermsConditions = () => {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1>Terms & Conditions</h1>

        <p className="policy-intro">
          Welcome to our store. By accessing or using our website, you agree to
          comply with and be bound by the following Terms & Conditions. Please
          read them carefully before using our services.
        </p>

        <section className="policy-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing this website, creating an account, or placing an
            order, you agree to these Terms & Conditions and our Privacy
            Policy.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Product Information</h2>
          <p>
            We strive to ensure that all product descriptions, images, pricing,
            and availability are accurate. However, errors may occasionally
            occur. We reserve the right to correct any errors without prior
            notice.
          </p>
        </section>

        <section className="policy-section">
          <h2>3. Orders & Payments</h2>
          <ul>
            <li>All orders are subject to acceptance and availability.</li>
            <li>Prices are displayed in Indian Rupees (₹).</li>
            <li>Payments can be made through secure online payment methods or Cash on Delivery (where available).</li>
            <li>We reserve the right to cancel any order due to pricing errors, suspected fraud, or stock unavailability.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Shipping & Delivery</h2>
          <p>
            Delivery timelines are estimates and may vary depending on your
            location, courier services, weather conditions, or unforeseen
            circumstances.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Returns & Refunds</h2>
          <p>
            Returns, exchanges, and refunds are governed by our Returns &
            Exchange Policy. Please review that policy before requesting a
            return.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. User Responsibilities</h2>
          <ul>
            <li>Provide accurate account and shipping information.</li>
            <li>Maintain the confidentiality of your account credentials.</li>
            <li>Do not misuse or attempt to disrupt the website.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>7. Intellectual Property</h2>
          <p>
            All content on this website, including logos, images, text,
            graphics, and designs, is the property of the company and may not
            be copied, reproduced, or distributed without prior written
            permission.
          </p>
        </section>

        <section className="policy-section">
          <h2>8. Limitation of Liability</h2>
          <p>
            We shall not be liable for any indirect, incidental, or
            consequential damages arising from the use of our website or
            products, except where required by applicable law.
          </p>
        </section>

        <section className="policy-section">
          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to update or modify these Terms & Conditions at
            any time without prior notice. Continued use of the website
            constitutes acceptance of the revised terms.
          </p>
        </section>

        <section className="policy-section">
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions regarding these Terms & Conditions, please
            contact us:
          </p>

          <p>
            <strong>Email:</strong> support@yourstore.com
            <br />
            <strong>Phone:</strong> +91 98765 43210
          </p>
        </section>

        <section className="policy-section note">
          <h2>Important Note</h2>
          <p>
            By continuing to use this website, you acknowledge that you have
            read, understood, and agreed to these Terms & Conditions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;