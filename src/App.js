import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Nav from "./components/Nav"


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/Contactpage';

function App() {
  return (
    <div>    
    <Router>
        <Nav />
      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </Router>
      </div>
  );
}

export default App;
