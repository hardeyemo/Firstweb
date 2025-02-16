import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Landing/Home'
import Login from './Link/Login'
import Register from './Link/Register'
import About from "./Link/About";
import Contact from "./Link/Contact";
import Write from "./Link/Write";
import  SinglePost  from "./Link/SinglePost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="write" element={<Write />} />
        <Route path="/post/:id" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
