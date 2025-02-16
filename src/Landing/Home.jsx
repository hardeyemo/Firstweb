import { useEffect, useState } from "react"
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Side from "../components/Side"
import Footer from "../components/Footer"
import Posts from "../components/Posts"
import { useLocation } from "react-router-dom"
import axios from "axios"



const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation()
  

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:8800/app/posts'+ search)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])

  return (
    <div>
      <Nav />
      <Hero />
      <div className="flex justify-around m-10">
        <Posts posts={posts} />
        <Side />
      </div>
      <Footer />
    </div>
  )
}

export default Home;
