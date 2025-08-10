import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
          <p className="text-gray-400">
            Our blog is a space for sharing visual stories from striking photos to heartfelt comments and creative titles. Join us in expressing, connecting, and discovering through images.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</Link>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Popular Tags</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Nature</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Urban</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Portraits</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Abstract</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
          <p className="text-gray-400 mb-4">Follow us on social media and stay updated!</p>
          <div className="flex justify-center space-x-6 text-gray-400 text-2xl">
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
              href="https://www.twitter.com"
              aria-label="Twitter"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-8 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Visual Post Blog. All rights reserved. | Built to showcase the power of pictures and stories.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
