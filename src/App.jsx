import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Landing/Home'
import Login from './Link/Login'
import Register from './Link/Register'
import About from "./Link/About";
import Contact from "./Link/Contact";
import Write from "./Link/Write";
import  SinglePost  from "./Link/SinglePost";
import { Context } from "./context/Context";
import Nav from "./components/Nav";
import Settings from "./Link/Settings";


const App = () =>{
  const {user} = useContext(Context)
  return (
    <Router>
      <Nav />
      < Routes>
        <Route index path="/" element={<Home />} />
        <Route path="login" element={user ? <Home /> : <Login />} />
        <Route path="write" element={user ? <Write /> : <Register />} />
        <Route path="register" element={user ? <Home /> : <Register />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="settings" element={<Settings />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </Router>
  )
}

export default App


{/* <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="write" element={<Write />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </BrowserRouter> */}