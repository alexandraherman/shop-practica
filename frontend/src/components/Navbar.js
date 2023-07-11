import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";
import {GiBookCover} from "react-icons/gi";
import {FaBars, FaTimes} from "react-icons/fa";
import {IconContext} from "react-icons/lib";

function Navbar()
{
    const [click, setClick]= useState(false)
    const handleClick = ()=> setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return(
    <IconContext.Provider value={{color: "#fff"}}>
        <nav className='navbar'>
            <div className='navbar-container container'>
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
                    <GiBookCover className="navbar-icon"/>
                    MyBook
                </Link>
                <div className='menu-icon' onclick={handleClick}>
                    {click ? <FaTimes/>: <FaBars/>}
                    </div>
                <ul className={click ?'nav-menu active': "nav-menu"}>
                    <li className="nav-item">
                        <NavLink to="/" 
                        className={({ isActive }) => 
                        "nav-links" + (isActive ? " activated" :"")}
                        onClick={closeMobileMenu}
                        >
                        Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" 
                        className={({ isActive }) => 
                        "nav-links" + (isActive ? " activated" :"")}
                        onClick={closeMobileMenu}
                        >
                        About
                    </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/signup" 
                        className={({ isActive }) => 
                        "nav-links" + (isActive ? " activated" :"")}
                        onClick={closeMobileMenu}
                        >
                        Signup
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/register" 
                        className={({ isActive }) => 
                        "nav-links" + (isActive ? " activated" :"")}
                        onClick={closeMobileMenu}
                        >
                        Register
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/products" 
                        className={({ isActive }) => 
                        "nav-links" + (isActive ? " activated" :"")}
                        onClick={closeMobileMenu}
                        >
                        Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/create" 
                        className={({ isActive }) => 
                        "nav-links" + (isActive ? " activated" :"")}
                        onClick={closeMobileMenu}
                        >
                        Add
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
  </IconContext.Provider>
    );
}

export default Navbar;

