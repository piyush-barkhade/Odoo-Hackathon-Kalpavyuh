import { createContext, useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // LocalStorage key for ReWear
  const storageKey = "rewearAuthToken";

  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem(storageKey) || null
  );
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem(storageKey);
    if (token) {
      try {
        return jwtDecode(token);
      } catch (err) {
        console.error("Invalid token in storage:", err);
        return null;
      }
    }
    return null;
  });

  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  // Store token & user in context + localStorage
  const setLoginSession = (token) => {
    try {
      const decoded = jwtDecode(token);
      setAuthToken(token);
      setUser(decoded);
      localStorage.setItem(storageKey, token);
    } catch (err) {
      console.error("Failed to decode token:", err);
      setAuthError("Invalid token");
    }
  };

  const logoutUser = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem(storageKey);
  };

  useEffect(() => {
    const token = localStorage.getItem(storageKey);
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp && decoded.exp < currentTime) {
          console.warn("Token expired on load");
          logoutUser();
        } else {
          setAuthToken(token);
          setUser(decoded);
        }
      } catch (err) {
        console.error("Error decoding token on load:", err);
        logoutUser();
      }
    }
    setLoading(false);
  }, []);

  const contextData = {
    authToken,
    user,
    setLoginSession,
    logoutUser,
    loading,
    authError,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export { AuthContext };
