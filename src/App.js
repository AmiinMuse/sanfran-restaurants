// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';


import './styles.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Toolbar from './components/Toolbar';
import MainContent from './components/MainContent';
import Types from './components/Types';
import Restaurant from './components/Restaurant';
import Contact from './components/Contact';
import HitList from './components/Hit'; 
import FastFood from './components/Fastfood';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Toolbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/types" element={<Types />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hitlist" element={<HitList />} />
          <Route path="/type_fastfood" element={<FastFood />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
