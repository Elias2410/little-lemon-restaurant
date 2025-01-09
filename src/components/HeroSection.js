import React from 'react'
import headerimg from './assets/header.jpg'

const HeroSection = () => {
  return (
    <section className='container'>
        <div className='left'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
            <button>Reserve a Table</button>
        </div>
        <div className='right'>
          <img src={headerimg}/>
        </div>
    </section>
  )
}

export default HeroSection