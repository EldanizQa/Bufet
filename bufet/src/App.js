import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "leaflet/dist/leaflet.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Header";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Travel from "./components/Travel/Travel";
import Contact from "./components/Contact/Contact";
import Quba from "./components/Regions/Quba/Quba";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quba" element={<Quba />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
