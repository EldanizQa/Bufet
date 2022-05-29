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

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    centerMode: true,
    focusOnSelect: true,
  };
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
      <Slider className="slider" {...settings}>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={require("./assets/Icons/images/1.jpg")} />
            </div>
            <div className="details">
              <h2>
                John Doe <span className="job-title">UI Developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={require("./assets/Icons/images/4.jpg")} />
            </div>
            <div className="details">
              <h2>
                John Doe <span className="job-title">UI Developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={require("./assets/Icons/images/3.jpg")} />
            </div>
            <div className="details">
              <h2>
                John Doe <span className="job-title">UI Developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={require("./assets/Icons/images/2.jpg")} />
            </div>
            <div className="details">
              <h2>
                John Doe <span className="job-title">UI Developer</span>
              </h2>
            </div>
          </div>
        </div>
      </Slider>
      <Footer />
    </div>
  );
}

export default App;
