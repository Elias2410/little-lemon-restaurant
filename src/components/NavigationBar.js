import React from 'react';
import logoimg from './assets/logo.png';
import { NavLink, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const location = useLocation();
    const handleScroll = (e,hash) => {
        e.preventDefault();
        const element = document.querySelector(hash);
        if(element){
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    const showHomeItems = location.pathname === '/'

  return (
    <nav className="NavigationBarContainer">
      <NavLink to="/" ><img src={logoimg} className="navigation-bar-logo" alt="Logo" /></NavLink>
      <ul className="NavigationBar">
        <li> <NavLink to="/">Home</NavLink></li>
          {showHomeItems && (
              <>
                  <li className={location.hash === "#about-section" ? "active" : ""} > <NavLink to="#about-section" onClick={(e) => handleScroll(e,"#about-section")}>About</NavLink></li>
                  <li className={location.hash === "#highlights-section" ? "active" : ""}> <NavLink to="#highlights-section" onClick={(e) => handleScroll(e,"#highlights-section")}>Menu</NavLink></li>
                  <li className={location.hash === "#testimonials-section" ? "active" : ""}> <NavLink to="#testimonials-section" onClick={(e) => handleScroll(e,"#testimonials-section")}>Testimonials</NavLink></li>
                  <li> <NavLink to="/BookingPage">Reservations</NavLink></li>
              </>
          )}

        <li> <NavLink to="/login">Login</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;