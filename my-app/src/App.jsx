import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Awards from "./pages/Awards/Awards";
import Events from "./pages/EventsPage/EventsPage";
import Blog from "./pages/Blogs/Blogs";
import Magazine from "./pages/Magazine/Magazine";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import "./App.css";

const App = () => (

   <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/events" element={<Events />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/magazine" element={<Magazine />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
   </>
  
);

export default App;
