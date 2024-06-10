import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Contact from './views/Contact';
import AddContact from './views/AddContact';

const Layout = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/add-contact" element={<AddContact />} />
    </Routes>
  </Router>
);

export default Layout;
