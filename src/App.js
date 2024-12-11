// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/AboutUs';
import Location from './components/Location';
import Feedback from './components/Feedback';
import Amenties from './components/Amenties';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Team from './components/Team';

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/amenties" element={<Amenties />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/team" element={<Team />} /> 
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
