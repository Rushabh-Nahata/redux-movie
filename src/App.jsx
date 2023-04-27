import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import SingleMovies from "./components/SingleMovie/SingleMovie";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovies />} />
      </Routes>
    </div>
  );
}

export default App;
