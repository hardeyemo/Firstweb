import React, { useEffect, useState } from 'react';
import about from "../assets/img_girl.jpg";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Side = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const res = await axios.get('http://localhost:8800/app/categories/');
      setCats(res.data);
    };
    fetchCats();
  }, []);

  return (
    <div className="flex flex-col items-center w-80 bg-gray-50 p-4 rounded-lg shadow-lg h-auto">
      {/* ABOUT Section */}
      <div className="flex flex-col items-center border-t-2 border-gray-300 w-full py-4">
        <h1 className="text-lg font-semibold text-gray-700 mb-2">ABOUT</h1>
        <img className="w-full h-48 object-cover rounded-md border mb-3" src={about} alt="About" />
        <p className="text-gray-600 text-sm text-center px-4 border-b-2 border-gray-300 pb-4">
          <p className="text-gray-600 text-sm text-center px-4 border-b-2 border-gray-300 pb-4">
            Welcome to my first web project! I'm exploring the world of frontend development and using this space to practice React and share what I'm building.
          </p>

        </p>
      </div>

      {/* Categories Section */}
      <div className="flex flex-col items-center w-full text-center mt-6">
        <h1 className="text-lg font-semibold text-gray-700 mb-3">CATEGORIES</h1>
        <ul className="grid grid-cols-2 gap-3 text-gray-600 border-t-2 border-gray-300 pt-3 w-full">
          {cats.map((c) => (
            <Link key={c.name} to={`/?cat=${c.name}`}>
              <li className="cursor-pointer hover:text-gray-900 transition-colors">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 text-gray-600 text-2xl">
        <a
          href="https://www.facebook.com/yourfacebookprofile"
          aria-label="Facebook"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/yourinstagramprofile"
          aria-label="Instagram"
          className="hover:text-pink-500 transition-colors duration-300"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="/https://www.twitter.com"
          aria-label="Twitter"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default Side;
