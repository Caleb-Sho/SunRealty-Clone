// src/App.js

import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import FeaturedListings from '../../components/FeaturedListings/FeaturedListings';
import Footer from '../../components/Footer/Footer';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedListings />
      <Footer />
    </div>
  );
}

export default Home;
