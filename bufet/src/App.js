import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact component={MainPage} />
        <Route path="/list/:id" exact component={ListPage} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
