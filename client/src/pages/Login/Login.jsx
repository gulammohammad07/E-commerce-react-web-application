import { Link, useLocation } from "react-router-dom";
import { FaGoogle, FaLock, FaShieldAlt } from "react-icons/fa";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const location = useLocation();
  const { loginWithGoogle } = useAuth();
  const params = new URLSearchParams(location.search);
  const redirectTo = params.get("redirect") || "/";
  const error = params.get("error");
  const isCheckoutLogin = redirectTo === "/checkout";

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <main className="login-page">
      <section className="login-panel" aria-label="Login">
        <div className="login-copy">
          <span className="login-badge">
            <FaShieldAlt />
            Secure checkout
          </span>

          <h1>{isCheckoutLogin ? "Login to complete your order" : "Welcome back"}</h1>

          <p>
            Continue with Google to access checkout, your profile, and your order
            history in LittleTrendz.
          </p>

          <div className="login-trust">
            <div>
              <FaLock />
              <span>Protected OAuth sign in</span>
            </div>
            <div>
              <FaShieldAlt />
              <span>No password stored here</span>
            </div>
          </div>
        </div>

        <div className="login-card">
          <h2>Sign in</h2>
          <p className="login-card-subtitle">
            Use your Google account to continue{isCheckoutLogin ? " to checkout" : ""}.
          </p>

          <div className="oauth-actions">
            <button
              className="oauth-btn"
              type="button"
              onClick={() => loginWithGoogle(redirectTo)}
            >
              <FaGoogle />
              Continue with Google
            </button>
          </div>

          <p className="login-note">
            By continuing, you agree to LittleTrendz account and privacy terms.
          </p>

          <Link className="back-to-cart" to="/cart">
            Back to cart
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Login;
