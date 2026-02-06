import { createContext, useContext, useEffect, useState } from "react";
import { getAccessToken, logout as kcLogout } from "@/lib/authApi";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Parse user from token
  const parseUserFromToken = () => {
    const token = getAccessToken();

    if (!token) {
      return null;
    }

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));

      if (payload.exp * 1000 < Date.now()) {
        return null;
      }

      return {
        name: payload.name || payload.preferred_username || payload.email,
        email: payload.email,
        roles: payload.realm_access?.roles || [],
      };
    } catch {
      return null;
    }
  };

  // Check for token on mount
  useEffect(() => {
    const parsedUser = parseUserFromToken();
    setUser(parsedUser);
    setLoading(false);
  }, []);

  const logout = () => kcLogout();

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
