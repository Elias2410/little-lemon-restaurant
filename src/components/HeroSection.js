import React from 'react'
import headerimg from './assets/header.jpg'

const HeroSection = () => {
  return (
    <section className='HeroSectionContainer'>
        <div className='HeroSectionLeft'>
          <p id='HeroSectionResturantName'>Little Lemon</p>
          <p id='HeroSectionResturantLocation'>Chicago</p>
          <div id='ParagraphBtnContainer'>
            <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
            <button id='ReserveTableBtn'>Reserve a Table</button>
          </div>
        </div>
        <div className='HeroSectionRight'>
          <img src={headerimg} id='HeroSectionImg'/>
        </div>
    </section>
  )
}

export default HeroSection