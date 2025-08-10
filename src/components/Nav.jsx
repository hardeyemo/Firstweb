import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Home = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "https://backside-1nl6.onrender.com/images/";
  const [currentUser, setCurrentUser] = useState(user);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  return (
    <div className="bg-gray-100 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between py-4 px-6 md:px-[90px]">
        <ul className="hidden md:flex bg-white text-lg items-center gap-6 px-6 py-2 rounded-lg shadow-md text-gray-700">
          <Link to="/" className="hover:text-blue-600">HOME</Link>
          <Link to="/About" className="hover:text-blue-600">ABOUT</Link>
          <Link to="/Contact" className="hover:text-blue-600">CONTACT</Link>
          <Link to="/Write" className="hover:text-blue-600">WRITE</Link>
          {currentUser && (
            <li
              className="cursor-pointer hover:text-red-600" onClick={() => {
                dispatch({ type: "LOGOUT" });
                localStorage.removeItem("currentUser"); setCurrentUser(null);
              }}> LOGOUT
            </li>
          )}
        </ul>
        <button className="md:hidden text-gray-600 text-2xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>
        <div
          className={`absolute top-16 left-0 w-full bg-gradient-to-r from-gray-100 to-blue-50 py-6 px-4 flex flex-col gap-5 items-center list-none rounded-lg shadow-lg md:hidden transform transition-transform duration-500 ease-in-out ${menuOpen ? "translate-y-0 opacity-100" : "hidden -translate-y-full opacity-0"
            }`} >
          <li>
            <Link
              to="/"
              className="bg-gray-700 px-8 py-2 text-white text-lg w-full rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300"
              onClick={() => setMenuOpen(false)} >HOME
            </Link>
          </li>
          <li>
            <Link to="/About"
              className="bg-gray-700 px-8 py-2 text-white text-lg w-full rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300"
              onClick={() => setMenuOpen(false)}> ABOUT
            </Link>
          </li>
          <li>
            <Link to="/Contact"
              className="bg-gray-700 px-8 py-2 text-white text-lg w-full rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300"
              onClick={() => setMenuOpen(false)} > CONTACT
            </Link>
          </li>
          <li className="w-full text-center">
            <Link
              to="/Write"
              className="bg-gray-700 px-8 py-2 text-white text-lg w-full rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300"
              onClick={() => setMenuOpen(false)}>WRITE
            </Link>
          </li>

          {currentUser && (
            <Link className="bg-gray-700 px-8 py-2 text-white text-lg w-full rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300"
              onClick={() => {
                dispatch({ type: "LOGOUT" });
                localStorage.removeItem("currentUser");
                setCurrentUser(null);
                setMenuOpen(false);
              }}>
              LOGOUT
            </Link>
          )}
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          {currentUser ? (
            <Link to="/Settings">
              <img className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer border border-gray-300" src={PF + user.profilePic} alt="User" />
            </Link>
          ) : (
            <div className="hidden md:flex items-center gap-4">
              <Link
                className="bg-white text-gray-700 text-base md:text-lg px-2 md:px-3 py-1 md:py-2 shadow-md rounded-lg hover:bg-gray-100 transition" to="/Login">Login
              </Link>
              <Link
                className="bg-white text-gray-700 text-base md:text-lg px-2 md:px-3 py-1 md:py-2 shadow-md rounded-lg hover:bg-gray-100 transition" to="/Register" >Register
              </Link>
            </div>
          )}
          <i className="fa-solid fa-magnifying-glass text-lg md:text-xl text-gray-600 cursor-pointer hover:text-gray-900 transition-colors duration-200"></i>
        </div>
      </div >
    </div >
  );
};

export default Home;
