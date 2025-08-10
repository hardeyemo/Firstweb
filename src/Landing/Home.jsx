import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Side from "../components/Side";
import Footer from "../components/Footer";
import Posts from "../components/Posts";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://backside-1nl6.onrender.com/app/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div>
      <Hero />
      <div className="flex flex-col md:flex-row gap-10 m-5 md:m-10">
        <div className="w-full md:w-2/3">
          <Posts posts={posts} />
        </div>
        <div className="w-full md:w-1/3"><Side /></div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
