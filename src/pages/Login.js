import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, isAuthenticated, user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      setError("Invalid credentials");
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
      <div className="flex w-[80%] max-w-4xl bg-white rounded-lg shadow-black shadow-2xl overflow-hidden">
        {/* Left Side - Logo Section */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-b from-blue-700 to-blue-900 items-center justify-center">
          <div className="p-6">
            <img src="/assets/images/l1.png" alt="Logo" className="w-32 h-32" />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Login
          </h2>

          {/* Google Login Button */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg mt-4 hover:bg-gray-100">
            <FcGoogle className="text-xl" />
            <span>Log in with Google</span>
          </button>

          <div className="text-center text-gray-400 text-sm my-4">
            or Log in with Email
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
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
            </div>

            {/* Password Field */}
            <div className="mb-4">
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
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm mb-4">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="rounded" />
                Remember me
              </label>
              <Link
                to="/forgot-password"
                className="text-blue-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
            >
              Login
            </button>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
          </form>

          {/* Register Link */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Not registered yet?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
