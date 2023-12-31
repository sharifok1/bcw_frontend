import React, { useState } from 'react';
import logo from "../../Assets/logo.png";
import './Navbar.css'
import { Container, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

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
                            <NavLink
                             className="nav-link"
                             to="/home">Home</NavLink>
                        </li>
                        {/* <li className="nav-items">
                            <NavLink 
                            className="nav-link"
                            to="/serviceDetails">Our Services</NavLink>
                        </li> */}
                        <li>
                        <Dropdown >
                            <Dropdown.Toggle className='nav-dropdown'>
                                Our Projects
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>
                                <NavLink
                                    className="nav-link"
                                    to="/webService">Web Development
                                </NavLink>
                                </Dropdown.Item>
                                
                                <Dropdown.Item>
                                <NavLink
                                    className="nav-link"
                                    to="/architecService">2D & 3D Design Architecture
                                </NavLink>  
                                </Dropdown.Item>

                                <Dropdown.Item>
                                <NavLink
                                    className="nav-link"
                                    to="/graphicsService">Graphics Desing
                                </NavLink>                        
                                </Dropdown.Item>

                                <Dropdown.Item>
                                <NavLink
                                    className="nav-link"
                                    to="/uxUiService">UX/UI Design
                                </NavLink>
                                </Dropdown.Item>
                            </Dropdown.Menu>    
                        </Dropdown>

                    </li>
                        <li className="nav-items">
                            <NavLink 
                            className="nav-link"
                            to="/serviceDetails">Our Services</NavLink>
                        </li>
                        <li className="nav-items">
                            <NavLink 
                            className="nav-link"
                            to="/">About Us</NavLink>
                        </li>
                        <li className="nav-items">
                            <NavLink 
                            className="nav-link"
                            to="/">Contact</NavLink>
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