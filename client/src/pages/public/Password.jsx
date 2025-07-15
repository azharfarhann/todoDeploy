import React, { useState } from "react";
import axios from "axios";

const Password = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await axios.post("http://localhost:5003/api/forgetpassword", { email });
      setMsg(res.data.msg || "Password reset link or new password sent to your email.");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      setMsg(error.response?.data?.msg || "Failed to send reset link.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-cyan-900 px-4 relative">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl relative">
        <h2 className="text-4xl font-medium text-center mb-6 text-black">
          Forgot Password
        </h2>

        {msg && (
          <div className="mb-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded text-center">
            {msg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@gmail.com"
              requigreen
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center items-center gap-2 bg-green-600 text-white py-2 rounded-lg font-semibold transition duration-300 ${loading ? "opacity-60 cursor-not-allowed" : "hover:scale-110 hover:bg-green-700"
              }`}
          >
            {loading ? (
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Generate New Password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Password;
