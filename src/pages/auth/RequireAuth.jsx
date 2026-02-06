import { useEffect } from "react";
import { useAuth } from "@/lib/AuthContext";
import { login } from "@/lib/authApi";
import LoadingSpinner from "@/components/LoadingSpinner";

const RequireAuth = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      login(); // async but we don't need to await - page will redirect
    }
  }, [loading, isAuthenticated]);

  if (loading) return <LoadingSpinner />;
  if (!isAuthenticated) return null;

  return children;
};

export default RequireAuth;
