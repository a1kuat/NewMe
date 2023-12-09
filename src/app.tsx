import React from 'react';
import { BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom';
import SeriesPage from './Pages/SeriesPage';
import SeriesDetailPage from './Pages/SeriesDetailPage';
import CharactersDetailPage from './Pages/CharactersDetailPage';
import HomePage from './Pages/HomePage';
import CharactersPage from './Pages/CharactersPage';
import Navbar from './Components/Navbar/Navbar';
import GraphPage from './Pages/GraphPage/GraphPage';

const App = () => {
  return(
    <Router basename="/https://static.inno-js.ru/NewMe">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/series" element={<SeriesPage/>}/>
        <Route path="/series/:id" element={<SeriesDetailPage/>}/>
        <Route path="/characters" element={<CharactersPage/>}/>
        <Route path="/characters/:id" element={<CharactersDetailPage/>}/>
        <Route path="/graph" element={<GraphPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;