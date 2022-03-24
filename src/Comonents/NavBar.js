import React from 'react';
import "./navbar.scss";
import { FaBars} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import {Link} from "react-router-dom";


// navbar scroll code
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window__scroll', window.scrollY>50)
})


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-md">
            <div className="container nav__container">
                <Link to="/" className="navbar-brand font-weight-bold">69-MAKTAB</Link>

                <ul className="navbar-nav nav__menu">
                    <li className="nav-item"><Link to="/" className="nav-link">Yangilik</Link></li>
                    <li className="nav-item"><Link to="/haqida" className="nav-link">Biz haqimizda</Link></li>
                    <li className="nav-item"><Link to="/kurslar" className="nav-link">Kurslar</Link></li>
                    <li className="nav-item"><Link to="/tadbirlar" className="nav-link">Tadbirlar</Link></li>
                </ul>
                <button id="open-menu-btn" type="button">
                    <FaBars />
                </button>
                <button id="close-menu-btn" type="button">
                    <IoMdClose />
                </button>
            </div>
        </nav>
    );
};

export default NavBar;