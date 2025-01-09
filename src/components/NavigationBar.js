import React from 'react'
import logoimg from './assets/logo.png'
import App from '../App'

const NavigationBar = () => {
  return (
    <nav className='NavigationBarContainer'>
        <a href={<App.js/>}><img src={logoimg} id='NavigationBarLogoImg' /></a>
        <ul className='NavigationBar'>
            <a href=''>Home</a>
            <a href=''>About</a>
            <a href=''>Menu</a>
            <a href=''>Reservations</a>
            <a href=''>Order Online</a>
            <a href=''>Login</a>
        </ul>
    </nav>
  )
}

export default NavigationBar