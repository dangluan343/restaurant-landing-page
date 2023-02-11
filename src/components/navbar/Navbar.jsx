import React, { useState } from 'react'
import './navbar.css'
import gericht from '../../assets/gericht.png'
import { RiMenu3Fill } from 'react-icons/ri'
import { GrClose } from 'react-icons/gr'

const NavbarLinks = () => {
    return (<>
        <div className="navbar__links-container">
            <div className="navbar__links">
                <a href="#home" className="navbar__link">Home</a>
                <a href="#pages" className="navbar__link">Pages</a>
                <a href="#contact" className="navbar__link">Contact Us</a>
                <a href="#blog" className="navbar__link">Blog</a>
                <a href="#landing" className="navbar__link">Landing</a>
            </div>

        </div>
    </>)
}
const Navbar = () => {
    const [menu, setMenu] = useState(false);
    function toggleNavbar(value) {
        setMenu(value);
    }
    return (
        <div className="navbar">
            <div className="navbar__logo"><img src={gericht} alt="" /></div>

            <NavbarLinks />

            <div className="navbar__authenticate">
                <p className="navbar__login-group">
                    <a href="#" >Log In</a> <span> / </span>
                    <a href="#" >Registration</a>
                </p>
                <a href="#">Book Table</a>
            </div>

            <div className="navbar__tablet">
                {
                    true && <div className="navbar__menu-icon"><RiMenu3Fill onClick={() => toggleNavbar(true)} /></div>
                }

            </div>
            {
                <div className={!menu ? 'top slide-top100' : "navbar__tablet_slide slide-bottom100"}>
                    <div className="navbar__tablet_header">
                        <div className="navbar__logo"><img src={gericht} alt="" /></div>
                        <div className="navbar__close-icon"><GrClose onClick={() => toggleNavbar(false)} /></div>

                    </div>
                    <div className="navbar__links-container">
                        <div className="navbar__links">
                            <a href="#home" className="navbar__link" onClick={() => toggleNavbar(false)}>Home</a>
                            <a href="#pages" className="navbar__link" onClick={() => toggleNavbar(false)}>Pages</a>
                            <a href="#contact" className="navbar__link" onClick={() => toggleNavbar(false)}>Contact Us</a>
                            <a href="#blog" className="navbar__link" onClick={() => toggleNavbar(false)}>Blog</a>
                            <a href="#landing" className="navbar__link" onClick={() => toggleNavbar(false)}>Landing</a>
                        </div>

                    </div>

                </div>
            }

        </div>


    )
}

export default Navbar