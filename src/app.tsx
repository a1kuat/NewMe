import React from 'react';
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom';
import SeriesPage from './Pages/SeriesPage';
import DetailedSeriesPage from './Pages/DetailedSeriesPage';
import HomePage from './Pages/HomePage';
import CharactersPage from './Pages/CharactersPage';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return(
    <Router basename="/newme">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/series" element={<SeriesPage/>}/>
        <Route path="/series/:id" element={<DetailedSeriesPage/>}/>
        <Route path="/characters" element={<CharactersPage/>}/>
        <Route path="/characters/:id" element={<CharactersPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;