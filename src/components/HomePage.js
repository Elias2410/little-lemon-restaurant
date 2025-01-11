import React from 'react'
import HeroSection from './HeroSection';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';

const HomePage = () => {
  return (
    <main>
        <HeroSection/>
        <Highlights/>
        <Testimonials/>
        <About/>
    </main>
  )
}

export default HomePage