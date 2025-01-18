import React from 'react';
import HeroSection from './HeroSection';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';

const HomePage = () => {
  return (
    <main>
      <section id="hero-section">
        <HeroSection />
      </section>
      <section id="highlights-section">
        <Highlights />
      </section>
      <section id="testimonials-section">
        <Testimonials />
      </section>
      <section id="about-section">
        <About />
      </section>
    </main>
  );
};

export default HomePage;