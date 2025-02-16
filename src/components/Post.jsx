import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <div>
      {post.photo && (
      <img className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer" src={post.photo} alt="" />
      )}
      <div>
        {post.categories.map(c=>(
          <h2 className="text-x  text-gray-800 mb-8">{c.name}</h2>
        ))}
      </div>
      <Link to={`/post/${post._id}`}>
          <span className="text-x  text-gray-800 mb-6">{post.title}</span>
      </Link>
          <h2 className="text-xl cursor-pointer font-semibold text-gray-800 mb-6" >{post.desc}</h2>
          <span className="text-gray-400 text-sm mb-5">{new Date (post.updatedAt).toDateString()}</span>
          <p className="text-gray-600 cursor-pointer mb-6" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor eos ad alias tempore optio eius i </p>
    </div>
  )
}

export default Post
