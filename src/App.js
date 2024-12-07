import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Levels from './layouts/list_of_levels';  // Import Levels component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/levels" />} />
        <Route path="/levels" element={<Levels />} />
      </Routes>
    </Router>
  );
}

export default App;
