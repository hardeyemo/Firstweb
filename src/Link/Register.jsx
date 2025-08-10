import axios from "axios";
import bgImage from "../assets/student-849826_1280.jpg";
import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("https://backside-1nl6.onrender.com/app/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative w-full max-w-md p-8 space-y-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700">
          Create a New Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              required
              className="w-full p-3 mt-1 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your Username"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              required
              className="w-full p-3 mt-1 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              required
              className="w-full p-3 mt-1 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 font-semibold text-white bg-gray-700 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Register
          </button>
        </form>

        {error && (
          <div className="p-2 text-center text-red-600 bg-red-100 rounded">
            Something went wrong. Please try again.
          </div>
        )}

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
