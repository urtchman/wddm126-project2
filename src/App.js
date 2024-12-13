// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword'; 

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
          <Route path="/account/signup" element={<Register />} />
          <Route path="/account/forgotpassword" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
  
export default App;
