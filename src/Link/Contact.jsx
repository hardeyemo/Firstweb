import React from 'react';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4e068da8-96f4-425d-aee2-bf25a38a222f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: json
    }).then((res) => res.json());
    if (res.success) {
      toast.success('Your message has been sent successfully!');
    }
  }

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
          <form className="w-full space-y-6 md:w-2/3" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name='name'
                placeholder="Name"
                className="border border-gray-300 rounded-md p-3 focus:border-blue-500"
                required
              />
              <input
                type="email"
                name='email'
                placeholder="Email"
                className="border border-gray-300 rounded-md p-3 focus:border-blue-500"
                required
              />
            </div>
            <input
              type="text"
              name='subject'
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-md p-3 focus:border-blue-500"
              required
            />
            <textarea
              placeholder="Message"
              name='message'
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
            <ToastContainer />

          </form>

          {/* Optional Map Section */}
          <div className="hidden md:block w-full md:w-1/3 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.1260329857232!2d7.489271518058084!3d9.057851180616138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bc82a8f7a1b%3A0x3a420f00b831f8ff!2sAbuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1615895943659!5m2!1sen!2sng"
            ></iframe>
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
