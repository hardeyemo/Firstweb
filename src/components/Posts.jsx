import React from "react";
import Post from "../components/Post";

const Posts = ({ posts }) => {
  console.log(posts);
  
  return (
    <div>
      {posts.map((p, index) => (
        <div key={index}>
          <Post post={p} />
        </div>
      ))} 
    </div>
  );
};

export default Posts; 