import React, { useContext, useRef } from 'react';
import { Context } from '../context/Context';
import bgImage from '../assets/student-849826_1280.jpg';
import axios from "axios";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("http://localhost:8800/app/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center relative px-4 md:px-8 lg:px-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-md p-6 md:p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-700">
          Login to Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              ref={userRef}
              required
              className="w-full p-3 mt-1 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              ref={passwordRef}
              required
              className="w-full p-3 mt-1 border rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={isFetching}
            className="w-full py-3 mt-4 font-semibold text-white bg-gray-700 rounded hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400 focus:outline-none focus:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{'=>'} 
          <a href="/Register" className="text-blue-700 hover:underline"> 
              Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
