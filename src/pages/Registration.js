import { useState } from "react";
import { Navigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaUser } from "react-icons/fa"; // Import the User icon from react-icons
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";

export default function Registration({ setUser }) {
  const [username, setUsername] = useState(""); // Add state for username
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("student"); // Add state for role
  const [error, setError] = useState("");
  const { register, isAuthenticated, user } = useAuth();
  const { isDark } = useTheme();
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Email Validation Function
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = { username: "", email: "", password: "", confirmPassword: "" };

    if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters.";
    }

    if (!isValidEmail(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err)) {
      return;
    }
    try {
      await register(email, password, username, role);
      setUser({ name: username, email, role }); // Set the user data
    } catch (err) {
      console.log("Registration error:", err);
      setError("Registration failed");
    }
  };

  if (isAuthenticated) {
    if (user.role === "admin") {
      return <Navigate to="/admin" />;
    } else if (user.role === "lecturer") {
      return <Navigate to="/lecturer" />;
    } else {
      return <Navigate to="/" />;
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex  w-[80%] max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Logo Section */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-b from-[rgba(60,88,252,1)] to-[rgba(28,31,73,1)]  items-center justify-center">
          <div className="p-8">
            <img src="/assets/images/l1.png" alt="Logo" className="w-32 h-32" />
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full md:w-1/2 p-8 ">
          <h2 className="text-2xl font-semibold text-gray-800 text-center flex items-center justify-center gap-2">
            <FaUser className="text-xl" />
            Create an Account
          </h2>

          {/* Google Registration Button */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg mt-2 hover:bg-gray-100">
            <FcGoogle className="text-xl" />
            <span>Sign up with Google</span>
          </button>

          <div className="text-center text-gray-400 text-sm my-2">
            or Sign up with Email
          </div>

          <form className="space-y-3" onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="mb-2">
              <label
                htmlFor="username"
                className="text-gray-700 text-sm font-medium"
              >
                Username*
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>

            {/* Email Field */}
            <div className="mb-2">
              <label
                htmlFor="email"
                className="text-gray-700 text-sm font-medium"
              >
                Email*
              </label>
              <input
                id="email"
                type="email"
                placeholder="mail@website.com"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div className="mb-2">
              <label
                htmlFor="password"
                className="text-gray-700 text-sm font-medium"
              >
                Password*
              </label>
              <input
                id="password"
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password Field */}
            <div className="mb-2">
              <label
                htmlFor="confirmPassword"
                className="text-gray-700 text-sm font-medium"
              >
                Confirm Password*
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}

              />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Role Selection */}
            <div className="mb-2">
              <label
                htmlFor="role"
                className="text-gray-700 text-sm font-medium"
              >
                Role*
              </label>
              <select
                id="role"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="lecturer">Lecturer</option>
              </select>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
            >
              Create Account
            </button>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
          </form>

          {/* Login Link */}
          <p className="text-center text-gray-600 text-sm mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
