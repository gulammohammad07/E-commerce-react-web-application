import { NavLink } from "react-router-dom";
import "./Account.css";

const AccountLayout = ({ title, children }) => {
  return (
    <main className="account-page">
      <aside className="account-sidebar">
        <h1>My Account</h1>
        <nav>
          <NavLink to="/account" end>Profile</NavLink>
          <NavLink to="/account/orders">Orders</NavLink>
        </nav>
      </aside>

      <section className="account-content">
        <h2>{title}</h2>
        {children}
      </section>
    </main>
  );
};

export default AccountLayout;
