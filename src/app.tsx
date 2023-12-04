import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./Pages/HomePage'));

const App = () => {
  return(
    <Router basename="/newme">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </Router>
  )
}

export default App;