import React from 'react';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <div className="max-w-8xl mx-auto px-6 py-16 space-y-12 bg-gray-50 mt-5">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Whether you have questions, feedback, or collaboration ideas, we’d love to hear from you! Reach out through the form below, or connect with us on social media.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:flex md:space-x-8">
          <form className="w-full space-y-6 md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-md p-3 focus:border-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md p-3 focus:border-blue-500"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-md p-3 focus:border-blue-500"
              required
            />
            <textarea
              placeholder="Message"
              className="w-full border border-gray-300 rounded-md p-3 focus:border-blue-500"
              rows="6"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-gray-700 text-white font-semibold rounded-md px-6 py-3 w-full hover:bg-blue-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Optional Map Section */}
          <div className="hidden md:block w-full md:w-1/3 bg-gray-200 rounded-lg overflow-hidden">
            <div className="h-full w-full flex items-center justify-center text-gray-600 text-lg">
              Map Placeholder
            </div>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="text-center space-y-4">
          <p className="text-gray-600">
            You can also reach us directly at{' '}
            <a href="mailto:hardeyemo3@gmail.com" className="text-blue-500 underline">
              hardeyemo3@gmail.com
            </a>
            .
          </p>
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
            {/* <a
              href="https://www.linkedin.com/"
              aria-label="LinkedIn"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              <i className="fab fa-linkedin"></i>
            </a> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
