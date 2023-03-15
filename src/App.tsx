import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { MovieDetailsPage, MoviesPage } from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
