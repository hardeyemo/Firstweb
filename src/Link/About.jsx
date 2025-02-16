import React from 'react';
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import authorImage from '../assets/music1.jpg'; // Add an author image in the assets folder

const About = () => {
  return (
    <div>
        <Nav />
        <div className="max-w-8xl mx-auto px-6 py-12 space-y-16 bg-gray-50">
      
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-md" style={{ backgroundImage: `url(${authorImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center justify-center h-full text-center text-white px-6">
          <div>
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Music Blog</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Discover insights, stories, and the pulse of the music industry. We're here to connect, inspire, and explore the magic of sound with you.
            </p>
          </div>
        </div>
      </div>

      {/* Purpose Section */}
      <div className="bg-white rounded-lg p-8 shadow-lg space-y-4 hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">Our Mission & Purpose</h2>
        <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto leading-relaxed">
          Founded by passionate music enthusiasts, our blog celebrates the diversity and richness of music across all genres. From rock to jazz, electronic to hip-hop, we aim to bring you closer to the music and the stories that shape it.
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
            Hi! I'm Drizzy, the mind and heart behind this blog. With years of experience in music journalism and a lifelong passion for sound, I’ve created this blog as a way to share my love for music with the world. From concert stories to playlists, I’m thrilled to have you join me on this journey!
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-500 rounded-lg p-8 text-white text-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
        <p className="text-lg max-w-2xl mx-auto mb-4">
          We love hearing from readers! Whether you have questions, feedback, or want to collaborate, feel free to reach out.
        </p>
        <a href="mailto:contact@ourmusicblog.com" className="text-lg font-medium underline">
          contact@ourmusicblog.com
        </a>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default About;
