import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import AuthContext from "./AuthContext";
import { API_BASE_URL, getCurrentUser, logoutUser } from "../Services/api";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const refreshUser = async () => {
    try {
      const response = await getCurrentUser();
      setUser(response.data.user || null);
    } catch (error) {
      console.error(error);
      setUser(null);
    } finally {
      setAuthLoading(false);
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const loginWithGoogle = (redirectTo = "/") => {
    window.location.assign(
      `${API_BASE_URL}/auth/google?redirect=${encodeURIComponent(redirectTo)}`
    );
  };

  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
      toast.success("Logged out successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Unable to logout.");
    }
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      authLoading,
      loginWithGoogle,
      logout,
      refreshUser,
    }),
    [user, authLoading]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
