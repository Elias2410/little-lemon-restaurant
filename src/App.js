import './App.css';
import React from 'react'
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return(
    <>
      <header>
        <NavigationBar/>
      </header>
      <main>
        <HeroSection/>
        <Highlights/>
        <Testimonials/>
        <About/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default App;
