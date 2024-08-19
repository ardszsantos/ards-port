import logo from './logo.svg';
import './styles/App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Aboutme from './pages/Aboutme';
import Projects from './pages/Projects';
import Cases from './pages/Cases';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cases" element={<Cases />} /> 
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-me" element={<Aboutme />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </Router>
  );
}

export default App;
