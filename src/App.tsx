import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PublicLightingPage from './pages/PublicLightingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/verejne-osvetleni" element={<PublicLightingPage />} />
      </Routes>
    </Router>
  );
}

export default App;