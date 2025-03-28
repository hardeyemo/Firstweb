import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../context/Context";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  if (!user) return <p className="text-center text-lg">You must be logged in to write a post.</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { username: user.username, title, desc };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + "_" + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:8800/app/upload", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } catch (err) {
        console.error("Upload error:", err);
      }
    }

    try {
      const res = await axios.post("http://localhost:8800/app/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.error("Post creation error:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8 bg-white shadow-md rounded-lg mt-[60px]">
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="Preview"
          className="mb-4 w-full h-64 object-cover rounded-lg"
        />
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your content here..."
          className="w-full p-3 border border-gray-300 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        ></textarea>

        <div className="flex flex-col sm:flex-row items-center justify-between">
          <label className="block w-full sm:w-auto mb-4 sm:mb-0">
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </label>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Write;
