import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles/landingpage.css';
import "react-toastify/dist/ReactToastify.css"
import HomePage from './landingpage/home/HomePage.jsx';
import ProductPage from './landingpage/products/ProductPage.jsx';
import PricingPage from './landingpage/pricing/PricingPage.jsx';
import AboutPage from './landingpage/about/AboutPage.jsx';
import SupportPage from './landingpage/support/SupportPage.jsx';
import Navbar from "./landingpage/Navbar.jsx";
import Footer from "./landingpage/Footer.jsx";

export default function LandingPage() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/support' element={<SupportPage />} />
      </Routes>

      <Footer />
    </>
  );
}