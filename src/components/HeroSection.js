import React from 'react'
import headerimg from './assets/header.jpg'
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate("/BookingPage")
  }
  return (
    <section className='HeroSectionContainer'>
        <div className='HeroSectionLeft'>
            <p id='HeroSectionResturantName' className="title-font secondary-color">Little Lemon</p>
            <p id='HeroSectionResturantLocation'  className="title-font">Chicago</p>
            <div className='paragraph-button-container'>
                <p className="text-font ParagraphWithMinWidth">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                <button onClick={handleClick} id='ReserveTableBtn'>Reserve a Table</button>
            </div>
        </div>
        <div className='HeroSectionRight'>
            <img src={headerimg} className='hero-section-img' alt="Hero"/>
        </div>
    </section>
  )
}

export default HeroSection