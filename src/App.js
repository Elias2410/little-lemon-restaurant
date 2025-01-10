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
        <div id='CopyRightText'>
          <p>&copy;2025 Littel Lemon. All rights reserved</p>
          </div>
      </footer>
    </>
  )
}

export default App;
