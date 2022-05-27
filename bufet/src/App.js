// <<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/Azerbaijan/Map.css";
import "leaflet/dist/leaflet.css";
import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";
import Footer from "./components/Footer/Footer";
import Map1 from "./components/Azerbaijan/Map.js";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Travel from "./components/Travel/Travel";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App" style={{ height: "2000px"}}>
      <Navbar />
      <Routes>
      <Route path="/about" exact component={About} />
      <Route path="/home" exact component={Home} />
      <Route path="/travel" exact component={Travel} />
      <Route path="/contact" exact component={Contact} />
        <Route path="/" exact component={MainPage} />
        <Route path="/list/:id" exact component={ListPage} />
      </Routes>
      <Map1 />
      <Footer />
    </div>
  );
}

export default App;
