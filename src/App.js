// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './assets/css/styles.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Destinations from './components/Destinations';
import Services from './components/Services';
import TravelGuide from './components/TravelGuide';
import Contact from './components/Contact';
import Login from './components/Login';

import logo from './assets/images/logo.svg';
import heroVideo from './assets/videos/sydney.mp4';
import parisImg from './assets/images/paris.jpg';
import tokyoImg from './assets/images/tokyo.jpg';
import newYorkImg from './assets/images/new-york.jpg';
import sydneyImg from './assets/images/sydney.jpg';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/services" element={<Services />} />
          <Route path="/travelguide" element={<TravelGuide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
 

export default App;
