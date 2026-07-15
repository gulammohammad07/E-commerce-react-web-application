import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import useAuth from "../../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { authLoading, isAuthenticated } = useAuth();
  const location = useLocation();

  if (authLoading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(location.pathname)}`}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;
