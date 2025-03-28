import React from "react";
import Post from "../components/Post";

const Posts = ({ posts }) => {
  console.log(posts);

  return (
    <div className="flex flex-col gap-10 w-full mr-10">
      {posts.map((p, index) => (
        <div key={index}>
          <Post post={p} />
        </div>
      ))}
    </div>
  );
};

export default Posts; 