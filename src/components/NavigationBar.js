import React, { useState } from 'react';
import logoimg from './assets/logo.png';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (e, hash) => {
        e.preventDefault();
        const element = document.querySelector(hash);
        if(element){
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
       setMenuOpen(false)
    };
    const showHomeItems = location.pathname === '/'

  return (
    <nav className={`NavigationBarContainer ${menuOpen ? 'menu-open' : ''}`}>
      <NavLink to="/" ><img src={logoimg} className="navigation-bar-logo" alt="Logo" /></NavLink>
        <button className="burger-menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      <ul className={`NavigationBar ${menuOpen ? 'active' : ''}`}>
        <li> <NavLink to="/" onClick={()=>setMenuOpen(false)}>Home</NavLink></li>
          {showHomeItems && (
              <>
                  <li className={location.hash === "#about-section" ? "active" : ""} > <NavLink to="#about-section" onClick={(e) => handleScroll(e,"#about-section")}>About</NavLink></li>
                  <li className={location.hash === "#highlights-section" ? "active" : ""}> <NavLink to="#highlights-section" onClick={(e) => handleScroll(e,"#highlights-section")}>Menu</NavLink></li>
                  <li className={location.hash === "#testimonials-section" ? "active" : ""}> <NavLink to="#testimonials-section" onClick={(e) => handleScroll(e,"#testimonials-section")}>Testimonials</NavLink></li>
                  <li> <NavLink to="/BookingPage" onClick={()=>setMenuOpen(false)}>Reservations</NavLink></li>
              </>
          )}

        {/* <li> <NavLink to="/login" onClick={()=>setMenuOpen(false)}>Login</NavLink></li> */}
      </ul>
    </nav>
  );
};

export default NavigationBar;