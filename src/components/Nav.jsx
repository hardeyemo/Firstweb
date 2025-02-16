import { useEffect, useState } from "react";
import girl from "../assets/img_girl.jpg";
import { Link } from "react-router-dom";

const Home = () => {

  const [data, setData] = useState({})
  console.log(data);

  useEffect(() => {
    const user = localStorage.getItem("currentUser")
    if (user) setData(JSON.parse(user))
  }, [])
  return (

    <div className="flex items-center justify-between p-6 bg-gray-100 shadow-md">
      <div className="flex gap-4 text-gray-600">
        <i className="fa-brands fa-facebook text-xl cursor-pointer hover:text-blue-600 transition-colors duration-200"></i>
        <i className="fa-brands fa-square-instagram text-xl cursor-pointer hover:text-pink-500 transition-colors duration-200"></i>
        <i className="fa-brands fa-pinterest text-xl cursor-pointer hover:text-red-600 transition-colors duration-200"></i>
        <i className="fa-brands fa-twitter text-xl cursor-pointer hover:text-blue-400 transition-colors duration-200"></i>
      </div>

      <ul className="bg-white text-lg flex items-center gap-6 px-6 py-2 rounded-lg shadow-md text-gray-700">
        <Link className="cursor-pointer hover:text-gray-900 transition-colors duration-200" to="/">HOME</Link>
        <Link className="cursor-pointer hover:text-gray-900 transition-colors duration-200" to="/About">ABOUT</Link>
        <Link className="cursor-pointer hover:text-gray-900 transition-colors duration-200" to="/Contact">CONTACT</Link>
        <Link className="cursor-pointer hover:text-gray-900 transition-colors duration-200" to="/Write" >WRITE</Link>
        <li className="cursor-pointer hover:text-gray-900 transition-colors duration-200">LOGOUT</li>
      </ul>

      <div className="flex items-center gap-4">
        <img className="w-10 h-10 rounded-full cursor-pointer border border-gray-300" src={girl} alt="User" />
        <i className="fa-solid fa-magnifying-glass text-xl text-gray-600 cursor-pointer hover:text-gray-900 transition-colors duration-200"></i>
      </div>
      {/* <span className="font-semibold text-2xl">
        Welcome, {data?.username || "Guest"}
      </span> */}
    </div>
  );
};

export default Home;
