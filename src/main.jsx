import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from "./context/Context";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
)



// //Register file
// import React, { useState } from "react";

// const [user, setUser] = useState({
//   username: "",
//   email: "",
//   password: "",
// });

// const handleChange = (e) => {
//   setUser((prev) => {
//     return { ...prev, [e.target.name]: e.target.value };
//   });
// };

// <input name="name" type="text" onChange={handleChange} />;
// <button type="submit">Login</button>

// const res = await axios.post("localhost:8800/auth/login", { username, password });

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     await newRequest.post("/auth/register", {
//       ...user,
//     });
//     navigate("/");
//   } catch (err) {
//     console.log(err);
//   }

//   // Login file
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await newRequest.post("/auth/login", { username, password });
//       localStorage.setItem("currentUser", JSON.stringify(res.data));
//       navigate("/")
//     } catch (err) {
//       setError(err.response.data);
//     }
//   };

//   <>
//     <input
//       name="username"
//       type="text"
//       placeholder="johndoe"
//       onChange={(e) => setUsername(e.target.value)}
//     />

//     <input
//       name="password"
//       type="password"
//       onChange={(e) => setPassword(e.target.value)}
//     />
//   </>


//   // axios instance

//   import axios from "axios";

//   const newRequest = axios.create({
//     baseURL: "http://localhost:8800/api/",
//     withCredentials: true,
//   });

//   export default newRequest;

//   import bgImage from '../assets/student-849826_1280.jpg';
//   import axios from "axios";
//   import React, { useState } from "react";

//   const Register = () => {
//     const [user, setUser] = useState({ username: "", email: "", password: "" });

//     const handleChange = (e) => {
//       setUser((prev) => ({
//         ...prev,
//         [e.target.name]: e.target.value,
//       }));
//     };

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const { username, email, password } = user;

//       try {
//         const res = await axios.post(
//           "http://localhost:8800/app/auth/register",
//           { username, email, password },
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         console.log(res);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     return (
//       <div
//         className="flex justify-center items-center min-h-screen bg-cover bg-center relative"
//         style={{
//           backgroundImage: `url(${bgImage})`,
//         }}
//       >
//         {/* Overlay with transparency */}
//         <div className="absolute inset-0 bg-black opacity-60"></div>

//         <div className="relative w-full max-w-md p-8 space-y-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
//           <h2 className="text-3xl font-bold text-center text-blue-600">Create a New Account</h2>

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 name="username"
//                 onChange={handleChange}
//                 id="username"
//                 required
//                 className="w-full p-3 mt-1 border rounded"
//                 placeholder="Enter your Username"
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 onChange={handleChange}
//                 id="email"
//                 required
//                 className="w-full p-3 mt-1 border rounded"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 onChange={handleChange}
//                 id="password"
//                 required
//                 className="w-full p-3 mt-1 border rounded focus:outline-none focus:ring focus:ring-blue-200"
//                 placeholder="Enter your password"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3 mt-4 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
//             >
//               Register
//             </button>
//           </form>

//           <p className="text-center text-sm text-gray-500">
//             Already have an account?{" "}
//             <a href="/login" className="text-blue-600 hover:underline">
//               Login here
//             </a>
//           </p>
//         </div>
//       </div>
//     );
//   };

//   export default Register;
//   app.use(cors({ origin: "http://localhost:5173", credentials: true }));
