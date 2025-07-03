import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PublicLightingPage from './pages/PublicLightingPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import ReferencePage from './pages/ReferencePage';
import DotacePage from './pages/DotacePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/verejne-osvetleni" element={<PublicLightingPage />} />
        <Route path="/dalsi-sluzby" element={<ServicesPage />} />
        <Route path="/dotace" element={<DotacePage />} />
        <Route path="/reference" element={<ReferencePage />} />
        <Route path="/kontakt" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;