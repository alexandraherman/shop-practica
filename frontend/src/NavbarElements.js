//import { FaBars } from "react-icons/fa";
//import { NavLink as Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import styled from "styled-components";

import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => (
  <nav className="nav">
    {/* Restul codului */}
  </nav>
);

export const NavLink = ({ to, children }) => (
  <Link to={to} className="nav-link">
    {children}
  </Link>
);



export const NavMenu = ({ children }) => (
  <div className="nav-menu">
    {children}
  </div>
);

