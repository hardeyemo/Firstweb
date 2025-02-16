import bgImage from '../assets/student-849826_1280.jpg';
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/app/auth/login", { email, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/")
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${bgImage})`, }}>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600">Login to Your Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email Address </label>
            <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} required className="w-full p-3 mt-1 border rounded focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your email" />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Password </label>
            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} required className="w-full p-3 mt-1 border rounded focus:outline-none focus:ring focus:ring-blue-200" placeholder="Enter your password" />
          </div>

          <button type="submit" className="w-full py-3 mt-4 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Login</button>
        </form>

        <p className="text-center text-sm text-gray-500"> Don't have an account?{' '} <a href="/signup" className="text-blue-600 hover:underline">Sign up</a> </p>
      </div>
    </div>
  );
};

export default Login;
