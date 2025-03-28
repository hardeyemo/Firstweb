import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Side from "../components/Side";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Context } from "../context/Context";
import axios from "axios";

const SinglePost = () => {
  const PF = "http://localhost:8800/images/";
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const { user } = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  const deleteMe = async () => {
    try {
      await axios.delete(`http://localhost:8800/app/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {
      console.error("Failed to delete the post:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8800/app/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (error) {
      console.error("Failed to update the post:", error);
    }
  };

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:8800/app/posts/" + path);
      setPost(res.data);
      setDesc(res.data.desc);
      setTitle(res.data.title);
    };
    getPost();
  }, [path]);

  return (
    <div className="p-4 md:p-8">
      {/* FLEXBOX ROW for large screens, COLUMN for mobile */}
      <div className="flex flex-col md:flex-row gap-7">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 w-full md:w-2/3">
          {post.photo && (
            <img
              src={PF + post.photo}
              alt="Blog Cover"
              className="w-full h-56 sm:h-72 object-cover rounded-lg mb-4"
            />
          )}
          {updateMode ? (
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-4 p-2 w-full text-center border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              autoFocus
            />
          ) : (
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 mb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h1>
              {post.username === user?.username && (
                <div className="flex items-center gap-3 mt-4 md:mt-0">
                  <p className="text-sm md:text-base text-gray-500">
                    {new Date(post.createdAt).toDateString()}
                  </p>
                  <FaEdit
                    onClick={() => setUpdateMode(true)}
                    className="text-blue-500 cursor-pointer"
                  />
                  <MdDeleteForever
                    className="text-red-600 cursor-pointer"
                    onClick={deleteMe}
                  />
                </div>
              )}
            </div>
          )}

          <Link to={`/?user=/${post.username}`}>
            <h1 className="text-xl font-semibold text-gray-800 mb-4">
              Writer: {post.username}
            </h1>
          </Link>

          {updateMode ? (
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full h-40 sm:h-60 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          ) : (
            <p className="text-gray-700 leading-relaxed text-lg">
              {desc}
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              minus nam aliquid consequatur? Est maiores corporis, quos quam
              iste sed illum aperiam, ullam id, rerum incidunt maxime earum
              tempore nostrum?
            </p>
          )}

          {updateMode && (
            <div className="flex justify-end mt-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-4 py-2 rounded-lg shadow-md transition-all"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          )}
        </div>

        {/* SIDE SECTION - Stacks BELOW in mobile */}
        <div className="w-full md:w-1/3">
          <Side />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
