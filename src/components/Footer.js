import React from 'react';
import FooterLogo from './assets/FooterLogo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <section className='FooterSectionContainer'>
            <img className='footer-logo' src={FooterLogo} alt="Footer Logo"/>
            <nav>
                <ul>
                    <h1 className='FooterSectionContainerH1'>Doormat Navigation</h1>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/reservations">Reservations</Link>
                    <Link to="/order-online">Order Online</Link>
                    <Link to="/login">Login</Link>
                </ul>
            </nav>
            <nav>
                <ul>
                    <h1 className='FooterSectionContainerH1'>Contact</h1>
                    <Link to="/address">Address</Link>
                    <Link to="/phone">Phone Number</Link>
                    <Link to="/email">Email</Link>
                </ul>
            </nav>
            <nav>
                <ul>
                    <h1 className='FooterSectionContainerH1'>Social Media Links</h1>
                    <a href="https://www.facebook.com/" is>Facebook</a>
                    <a href="https://www.instagram.com/">Instagram</a>
                    <a href="https://x.com/?lang=en">Twitter</a>
                </ul>
            </nav>
        </section>
    );
};

export default Footer;