import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
          <p className="text-gray-400">
            Our music blog is dedicated to sharing the latest trends, artist spotlights, and reviews across various genres. Join us in celebrating the diversity of music.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a></li>
            <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
            <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Popular Categories</h3>
          <ul className="space-y-2">
            <li><a href="" className="text-gray-400 hover:text-white transition-colors duration-300">Rock</a></li>
            <li><a href="" className="text-gray-400 hover:text-white transition-colors duration-300">Pop</a></li>
            <li><a href="" className="text-gray-400 hover:text-white transition-colors duration-300">Jazz</a></li>
            <li><a href="" className="text-gray-400 hover:text-white transition-colors duration-300">Classical</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
          <p className="text-gray-400 mb-4">Follow us on social media and stay updated!</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="bg-gray-600 hover:bg-gray-500 p-3 rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="bg-gray-600 hover:bg-gray-500 p-3 rounded-full">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="bg-gray-600 hover:bg-gray-500 p-3 rounded-full">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="bg-gray-600 hover:bg-gray-500 p-3 rounded-full">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-8 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Music Blog. All rights reserved. | Created with passion for music.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
