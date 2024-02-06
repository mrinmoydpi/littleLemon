import React from 'react';
import { Link } from "react-router-dom";
import NavHamburger from '../Components/NavHamburger';

function Nav() {
    const handleClose = () => {
        document.getElementById("main-nav").className="";
    };

    return (
        <>
        <nav id="main-nav">
            <ul>
                <li><Link onClick={handleClose} to="/">Home</Link></li>
                <li><Link onClick={handleClose} to="/about">About</Link></li>
                <li><Link onClick={handleClose} to="/menu">Menu</Link></li>
                <li><Link onClick={handleClose} to="/reservations">Reservations</Link></li>
                <li><Link onClick={handleClose} to="/orderonline">Order Online</Link></li>
                <li><Link onClick={handleClose} to="/login">Login</Link></li>
            </ul>
            <button id="close-nav" onClick={handleClose}>
                X
            </button>
        </nav>
        <NavHamburger />
        </>
    );
}

export default Nav;