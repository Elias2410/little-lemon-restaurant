import React from 'react'
import FooterLogo from './assets/FooterLogo.png'

const Footer = () => {
  return (
    <section className='FooterSectionContainer'>
            <img style={{width:"200px",height:"300px",borderRadius:"25px",margin:"60px 0px"}} src={FooterLogo}/>
            <nav>
                <ul>
                    <h1>Doormat Nav igation</h1>
                    <a href=''>Home</a>
                    <a href=''>About</a>
                    <a href=''>Menu</a>
                    <a href=''>Reservations</a>
                    <a href=''>Order Online</a>
                    <a href=''>Login</a>
                </ul>
            </nav>
            <nav>
                <ul>
                    <h1>Contact</h1>
                    <a href=''>Address</a>
                    <a href=''>Phone Number</a>
                    <a href=''>Email</a>
                </ul>
            </nav>
            <nav>
                <ul>
                    <h1>Social Media Links</h1>
                    <a href="https://www.facebook.com/">Facebook</a>
                    <a href="https://www.instagram.com/">Instagram</a>
                    <a href="https://x.com/?lang=en">Twitter</a>
                </ul>
            </nav>
    </section>
  )
}

export default Footer