import React, { useState } from 'react';
import "./header.css"

const Header = () => {
    const [activeNav, setActiveNav] = useState('#home');

    const handleClick = (navId) => {
        setActiveNav(navId);
    };

    /*=========================Toggle Menu=======================*/
    const [toggle, setToggle] = useState(false);

    return (
        <header className='header'>
            <nav className='nav container'>
                <a href='index.html' className="nav__logo">ऋ&nbsp;t&nbsp;i&nbsp;k</a>

                <div className={toggle ? "nav__menu show--menu" : "nav__menu"}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a href='#home' onClick={() => handleClick('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                            <i className='uil uil-estate nav__icon'></i>Home</a>
                        </li>
                        <li className='nav__item'>
                            <a href='#about' onClick={() => handleClick('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <i className='uil uil-user nav__icon'></i>About
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#skills' onClick={() => handleClick('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <i className='uil uil-file-alt nav__icon'></i>Skills
                            </a>
                        </li>
                        
                        <li className='nav__item'>
                            <a href='#portfolio' onClick={() => handleClick('#portfolio')} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <i className='uil uil-scenery nav__icon'></i>Portfolio
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href='#contact' onClick={() => handleClick('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <i className='uil uil-message nav__icon'></i>Contact
                            </a>
                        </li>
                    </ul>
                   
                    <i className='uil uil-times nav__close' onClick={() => setToggle(!toggle)}></i>
                </div>
                   
                <div className="nav__toggle"  onClick={() => setToggle(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;
