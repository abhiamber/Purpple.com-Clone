import { createContext, useContext, useState } from "react";

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
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
