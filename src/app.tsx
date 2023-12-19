import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SeriesPage from "./Pages/SeriesPage";
import SeriesDetailPage from "./Pages/SeriesDetailPage";
import CharactersDetailPage from "./Pages/CharactersDetailPage";
import HomePage from "./Pages/HomePage";
import CharactersPage from "./Pages/CharactersPage";
import Navbar from "./Components/Navbar/Navbar";
import GraphPage from "./Pages/GraphPage/GraphPage";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <div className="container main-content">
      <Router basename="/NewMe">
        <Navbar />
        {/* <a href="https://ibb.co/sJhJhnC">
          <img src="https://i.ibb.co/LhMhMmr/logo.png" alt="logo" />
        </a> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/series/:id" element={<SeriesDetailPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:id" element={<CharactersDetailPage />} />
          <Route path="/graph" element={<GraphPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
