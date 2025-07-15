import React, { useState } from "react";
import axios from "axios";
import image from "../../assets/register.png"
import { useNavigate } from "react-router-dom";
const Register = () => {

  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("")


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {

    try {
      e.preventDefault();
      setLoading(true);
      const res = await axios.post(`${apiUrl}/public/register`, formData);
      setMsg(res.data.msg)
      navigate("/login");
    } catch (error) {
      console.error("Error:", error.response.data.msg);
      setMsg(error.response.data.msg)
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-900 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left: Form */}
        <div className="hidden md:flex flex-col justify-center items-start w-full h-full p-10 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Your Daily Productivity Partner</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-lg">
            <li>Create tasks for each day</li>
            <li>Edit, delete, and organize todos easily</li>
            <li>Auto-saves in your browser with no account needed</li>
            <li>Toggle between light and dark mode</li>
            <li>Designed for speed, focus, and simplicity</li>
          </ul>
        </div>


        <div className="p-8 md:p-12">
          <h2 className="text-4xl font-extrabold text-center mb-6 text-purple-700">
            Register
          </h2>
          {msg && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-700 px-6 py-3 rounded-lg shadow-md text-center z-50">
              <h2 className="font-semibold">{msg}</h2>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                placeholder="John ..."
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@gmail.com"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                placeholder="Phone Number ..."
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
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
                "Register"
              )}
            </button>

            <button
              onClick={() => {
                navigate("/login")
              }}
              className="w-full bg-blue-600 text-white py-2 hover:scale-110 transition-transform rounded-lg font-semibold hover:bg-blue-700 duration-300"
            >
              Login
            </button>
          </form>
        </div>



      </div>
    </div>
  );
};

export default Register;
