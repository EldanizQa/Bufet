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
import Baku from "./components/Regions/Baku/Baku";
import Nakhchivan from "./components/Regions/Nakhchivan/Nakhchivan";
import Shusha from "./components/Regions/Shusha/Shusha";
import Sliders from "./components/Slider/Slider";
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
        <Route path="/baku" element={<Baku />} />
        <Route path="/nakhchivan" element={<Nakhchivan />} />
        <Route path="/shusha" element={<Shusha />} />
      </Routes>
      <Sliders />
      <Footer />
    </div>
  );
}

export default App;
