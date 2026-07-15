import { FaEnvelope, FaIdBadge, FaUserCircle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import AccountLayout from "./AccountLayout";

const AccountProfile = () => {
  const { user } = useAuth();

  return (
    <AccountLayout title="Profile">
      <div className="profile-card">
        {user?.picture ? (
          <img src={user.picture} alt={user.name} />
        ) : (
          <FaUserCircle className="profile-fallback" />
        )}

        <div>
          <h3>{user?.name}</h3>
          <p>
            <FaEnvelope />
            {user?.email}
          </p>
          <p>
            <FaIdBadge />
            Signed in with {user?.provider || "Google"}
          </p>
        </div>
      </div>
    </AccountLayout>
  );
};

export default AccountProfile;
