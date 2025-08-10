import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const PF = "https://backside-1nl6.onrender.com/images/";

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {post.photo && (
        <img
          className="w-full h-40 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg mb-4 cursor-pointer"
          src={PF + post.photo}
          alt=""
        />
      )}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.categories.map((c, index) => (
          <span
            key={index}
            className="text-xs sm:text-sm md:text-base text-gray-800 bg-gray-100 px-2 py-1 rounded-full font-medium"
          >
            {c.name}
          </span>
        ))}
      </div>
      <Link to={`/post/${post._id}`}>
        <h2 className="block text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold mb-2 hover:text-blue-500 transition-colors">
          {post.title}
        </h2>
      </Link>
      <p className="text-sm sm:text-base text-gray-700 mb-4">
        {post.desc.length > 100 ? `${post.desc.substring(0, 100)}...` : post.desc}
      </p>
      <span className="block text-gray-400 text-xs sm:text-sm mb-2">
        {new Date(post.updatedAt).toDateString()}
      </span>
      <p className="text-sm sm:text-base text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, illum.
      </p>
    </div>
  );
};

export default Post;
