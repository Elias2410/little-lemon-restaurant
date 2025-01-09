import React from 'react'
import logoimg from './assets/logo.png'


const NavigationBar = () => {
  return (
    <nav className='NavigationBar'>
        <ul>
            <a href=''><img src={logoimg} /></a>
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