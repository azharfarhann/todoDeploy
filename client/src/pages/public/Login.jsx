import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [logData, setLogData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setLogData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${apiUrl}/public/login`, logData);
      setMsg(res.data.msg);
      localStorage.setItem("id", res.data.id); // Optional: save user ID/token
      navigate("/home"); // or wherever the user should go next
    } catch (error) {
      console.error("Login Error:", error.response?.data?.msg || error.message);
      setMsg(error.response?.data?.msg || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-900 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left: Info Section */}
        <div className="hidden md:flex flex-col justify-center items-start w-full h-full p-10 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Welcome Back!</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
            <li>Login to access your daily productivity dashboard</li>
            <li>Manage todos with speed and ease</li>
            <li>Auto-save with no setup</li>
            <li>Simple, clean, and focused experience</li>
          </ul>
        </div>

        {/* Right: Login Form */}
        <div className="p-8 md:p-12">
          <h2 className="text-4xl font-extrabold text-center mb-6 text-purple-700">
            Login
          </h2>

          {msg && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-6 py-3 rounded-lg shadow-md text-center z-50">
              <h2 className="font-semibold">{msg}</h2>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={logData.email}
                onChange={handleChange}
                placeholder="john@gmail.com"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={logData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center gap-2 bg-purple-600 text-white py-2 rounded-lg font-semibold transition duration-300 ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-purple-700"
                }`}
            >
              {loading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Login"
              )}
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="w-full bg-blue-600 text-white py-2 hover:scale-110 transition-transform rounded-lg font-semibold hover:bg-blue-700 duration-300"
            >
              Register
            </button>
            <button
              type="button"
              onClick={() => navigate("/forgot")}
              className="w-full bg-green-600 text-white py-2 hover:scale-110 transition-transform rounded-lg font-semibold hover:bg-green-700 duration-300"
            >
              Forgot Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
