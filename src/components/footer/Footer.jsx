import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">ऋ&nbsp;t&nbsp;i&nbsp;k</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" 
                    className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
            </ul>
            <div className="footer__social">

            <a href='http://www.instagram.com/' className='footer__social-link' target='blank'>
                <i class="bx bxl-instagram"></i>
            </a>
            <a href='https://www.dribble.com/' className='footer__social-link' target='blank'>
                <i class="bx bxl-dribbble"></i>
            </a>
            <a href='https://github.com/' className='footer__social-link' target='blank'>
                <i class="bx bxl-twitter"></i>
            </a>

            </div>
            <span className='footer__copy'>&#169; Rutiktavanoji</span>
        </div>
    </footer>
  )
}

export default Footer