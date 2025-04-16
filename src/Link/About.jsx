import React from 'react';
import Footer from "../components/Footer";
import authorImage from '../assets/music1.jpg'; // You can change this to another image if needed

const About = () => {
  return (
    <div>
      <div className="max-w-8xl mx-auto px-6 py-12 space-y-16 bg-gray-50 mt-7">

        {/* Hero Section */}
        <div className="relative h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-md" style={{ backgroundImage: `url(${authorImage})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative flex items-center justify-center h-full text-center text-white px-6">
            <div>
              <h1 className="text-5xl font-bold mb-4">Welcome to My Visual Blog</h1>
              <p className="text-lg max-w-3xl mx-auto">
                Dive into a space where moments are captured, stories are told through pictures, and every visitor can contribute with titles and comments.
              </p>
            </div>
          </div>
        </div>

        {/* Purpose Section */}
        <div className="bg-white rounded-lg p-8 shadow-lg space-y-4 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">Our Mission & Purpose</h2>
          <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto leading-relaxed">
            This platform was created to bring together photo lovers and storytellers. Every image shared holds a unique story — and you have the chance to title it, comment on it, and make it part of your own memory. It’s about expression, creativity, and community.
          </p>
        </div>

        {/* Author Section */}
        <div className="bg-gray-100 rounded-lg p-8 shadow-lg md:flex md:items-center md:space-x-6 hover:shadow-2xl transition-shadow duration-300">
          <img
            className="w-40 h-40 rounded-full object-cover mb-6 md:mb-0"
            src={authorImage}
            alt="Author"
          />
          <div>
            <h3 className="text-3xl font-semibold text-gray-800">Meet the Author</h3>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Hi! I'm Drizzy, the creator of this blog. I built this space to capture and share beautiful moments through images. Here, you can not only enjoy pictures but also give them your voice — by adding titles and engaging through comments. Let’s create and connect.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-500 rounded-lg p-8 text-white text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-lg max-w-2xl mx-auto mb-4">
            Whether you have feedback, questions, or ideas — I’d love to hear from you!
          </p>
          <a href="mailto:hardeyemo3@gmail.com" className="text-lg font-medium underline">
            hardeyemo3@gmail.com
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
