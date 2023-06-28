import { createContext, useContext, useEffect, useState } from "react";
import jwt from "jwt-decode";

export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    localStorage.setItem(
      "user",
      JSON.stringify({ name: user.user, role: user.role })
    );
    localStorage.setItem("token", user.token);
    setUser(user);
  };

  const getUser = () => {
    return localStorage.getItem("user");
  };

  const logout = () => {
    // console.log("logout");
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    let token = localStorage.getItem("token") || null;
    // console.log(token);
    if (token) {
      let decode = jwt(token);
      // console.log(decode, "njnn");
      if (Date.now() >= decode.exp * 1000) {
        logout();
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
