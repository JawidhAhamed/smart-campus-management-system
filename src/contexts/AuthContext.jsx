import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const defaultUser = {
    email: "hamthy05@gmail.com",
    password: "123456",
    username: "Hamthy",
    role: "lecturer", 
  };

  const register = async (email, password, username, role) => {
    if (!email || !password || !username || !role) {
      throw new Error("All fields are required");
    }
    // Simulate a successful registration
    setUser({ email, username, role });
    navigate("/");
  };

  const login = async (email, password) => {
    // Replace this with your actual login logic
    if (email === defaultUser.email && password === defaultUser.password) {
      setUser({ email, username: defaultUser.name, role: defaultUser.role });
      navigate("/");
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  const resetPassword = async (email) => {
    // Replace this with your actual password reset logic
    if (email === defaultUser.email) {
      // Simulate a successful password reset
      return Promise.resolve();
    } else {
      return Promise.reject(new Error("Email not found"));
    }
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, resetPassword, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
