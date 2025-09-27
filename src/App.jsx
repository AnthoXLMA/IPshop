import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Collection from './pages/Collection';
import Shop from './pages/Shop';
import Produit from './pages/Produit';
import Panier from './pages/Panier';
import Checkout from './pages/Checkout';
import Experiences from './pages/Experiences';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import CTAButton from './components/CTAButton';
import HeroSection from './components/HeroSection';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/produit/:id" element={<Produit />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
