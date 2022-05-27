// <<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Map from "./components/Azerbaijan/Map.js";
import "leaflet/dist/leaflet.css";
function App() {
  return (
    <div className="App" style={{ height: "2000px" ,width:"1000px"}}>
      <Header />
      <Routes>
        <Route path="/" exact component={MainPage} />
        <Route path="/list/:id" exact component={ListPage} />
      </Routes>
      <Map />
      <Footer />
    </div>
  );
}

export default App;
