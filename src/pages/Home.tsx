import React from 'react';
import Hero from '../components/Hero';
import CoreValues from '../components/CoreValues';
import About from '../components/About';
import Services from '../components/Services';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <CoreValues />
      <About />
      <Services />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;