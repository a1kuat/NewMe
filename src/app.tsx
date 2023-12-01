import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./Pages/HomePage'));
const HabitsPage = lazy(() => import('./Pages/HabitsPage'));

const App = () => {
  return(
    <Router basename="/newme">
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<div>Загрузка...</div>}>
            <HomePage/>
          </Suspense>
        }/>
        <Route path="/habits" element={
          <Suspense fallback={<div>Загрузка...</div>}>
            <HabitsPage/>
          </Suspense>
        }/>
      </Routes>
    </Router>
  )
}

export default App;