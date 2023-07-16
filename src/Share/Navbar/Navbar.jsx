import React, { useState } from 'react';
import logo from "../../Assets/logo.png";
import './Navbar.css'
import { Container } from 'react-bootstrap';

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
      setIsNavbarOpen(!isNavbarOpen);
    };
  
    return (
        <>
             <nav className={`custom-navbar ${isNavbarOpen ? 'open' : ''}`}>
               <Container>
                <div className="navbar-container">
                   
                    <button className="navbar-toggle" onClick={toggleNavbar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className='brand-logo-mobile'>
                       <img src={logo} alt="" />
                    </div>

                    <div className="navbar-menu">
                        <div className='brand-logo'>
                            <img src={logo} alt="" />
                        </div>
                    <ul className="navbar-nav">

                        <li className="nav-items">
                        <a href="#home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-items">
                        <a href="#services" className="nav-link">About</a>
                        </li>
                        <li className="nav-items">
                        <a href="#help" className="nav-link">Service</a>
                        </li>
                        <li className="nav-items">
                        <a href="#contact" className="nav-link">Our Projects</a>
                        </li>
                        <li className="nav-items">
                        <a href="#projects" className="nav-link">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </Container>
    </nav>
        </>
    );
};

export default Navbar;