import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setMessage("Check your inbox for further instructions");
    } catch (err) {
      setMessage("Failed to reset password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[80%] max-w-md bg-white rounded-lg shadow-black shadow-2xl p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Forgot Password
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-gray-700 text-sm font-medium">Email*</label>
            <input
              type="email"
              placeholder="mail@website.com"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Reset Password
          </button>
          {message && <div className="text-center text-sm mt-4">{message}</div>}
        </form>
      </div>
    </div>
  );
}
