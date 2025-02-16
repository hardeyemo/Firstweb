import axios from "axios";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Side from "../components/Side";
import Nav from '../components/Nav'
import { useState } from "react";

const SinglePost = () => {

  const location = useLocation()
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:8800/app/posts/" + path)
      setPost(res.data);
    }
    getPost()
  }, [path])

  return (
    <div>
      <Nav />
      <div className="flex gap-7">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden pt-5 ">
          {post.photo && (
            <img src={post.photo} alt="Blog Cover" className="w-full h-60 object-cover" />
          )}
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <h1 className="text-xl font-bold text-gray-900">{post.title}</h1>
              <Link to={`/?user=/${post.username}`}>
                <h1 className="text-xl font-bold text-gray-900 mb">Writer: {post.username}</h1>
              </Link>
              <p className="text-sm text-gray-500">{new Date(post.createdAt).toDateString()}</p>
            </div>
            <p className="text-gray-700 leading-relaxed text-4xl">{post.desc}</p>
            <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold">Read More →</button>
          </div>
        </div>
        <Side />
      </div>
    </div>

  );
};

export default SinglePost;
