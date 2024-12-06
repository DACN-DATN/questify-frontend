import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import IslandsPage from './Islands/IslandsPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/islands" />} />
        <Route path="/islands" element={<IslandsPage />} />
      </Routes>
    </Router>
  );
}

export default App;