import "./Policy.css";

const RaiseReturnRequest = () => {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1>Raise a Return Request</h1>

        <p className="policy-intro">
          If you are not satisfied with your purchase, you can request a return
          by following the steps below. Our team will review your request and
          keep you informed throughout the process.
        </p>

        <section className="policy-section">
          <h2>Eligibility for Return</h2>
          <ul>
            <li>Return requests must be raised within <strong>7 days</strong> of receiving the order.</li>
            <li>The product must be unused, unwashed, and in its original condition.</li>
            <li>All original tags and packaging must be intact.</li>
            <li>Products damaged due to misuse are not eligible for return.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>How to Raise a Return Request</h2>
          <ol>
            <li>Log in to your account.</li>
            <li>Go to <strong>My Orders</strong>.</li>
            <li>Select the order you wish to return.</li>
            <li>Click on <strong>Request Return</strong>.</li>
            <li>Choose the reason for the return and submit your request.</li>
          </ol>
        </section>

        <section className="policy-section">
          <h2>Return Pickup</h2>
          <p>
            Once your return request is approved, our courier partner will
            schedule a pickup within <strong>72 hours</strong>.
          </p>

          <p>Please ensure that:</p>

          <ul>
            <li>The product is packed securely.</li>
            <li>All original tags are attached.</li>
            <li>The package is ready for pickup.</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Refund Process</h2>
          <p>
            After the returned product passes our quality inspection, your
            refund will be initiated within <strong>24–48 hours</strong>.
          </p>

          <p>
            The refund amount will be credited to your original payment method
            within <strong>5–7 working days</strong>, depending on your bank or
            payment provider.
          </p>
        </section>

        <section className="policy-section">
          <h2>Need Assistance?</h2>
          <p>
            If you need help with your return request, please contact our
            customer support team.
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
            Return requests submitted after the eligible return period may not
            be accepted. Please ensure your product meets our return policy
            before submitting a request.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RaiseReturnRequest;