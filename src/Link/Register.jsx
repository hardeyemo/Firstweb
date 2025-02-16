import bgImage from '../assets/student-849826_1280.jpg'; 
import axios from "axios";
import React,{ useState } from 'react';
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [user, setUser] = useState({username: "", email: "", password: ""})
      const navigate = useNavigate();
    
    
    const handleMe = (e) => {
      setUser((prev) => ({
        ...prev, [e.target.name]: e.target.value,
      }));
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const res = await axios.post(
          "http://localhost:8800/app/auth/register", 
          { username: user.username, email: user.email, password: user.password }, 
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res); 
        navigate("/login")
      } catch (err) {
        console.error(err);
      }
    };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative w-full max-w-md p-8 space-y-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600">Create a New Account</h2>

        <form  className="space-y-4" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="username"
              name = "username"
              onChange={handleMe}
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
              name = "email"
              onChange={handleMe}
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
              name = "password"
              onChange={handleMe}
              id="password"
              required
              className="w-full p-3 mt-1 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
