import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import SignUp from './pages/signup';

 
function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </Router>
    );
}
 
export default App;