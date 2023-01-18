import React from 'react';
import './Footer.css';
import Be from '../../assets/Behance.svg';
import Insta from '../../assets/instagram.png';
import Tweet from '../../assets/twitter.png'
const Footer = () => {
  return (
    <footer>
      <ul><li><a href="#" className='footer_logo'>EGATOR</a></li></ul>
      <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experiences">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://Behance.com">
          <img src={Be} alt="" />
        </a>
        <a href="https://instagram.com">
          <img src={Insta} alt="" />
        </a>
        <a href="https://twitter.com">
          <img src={Tweet}alt="" />
        </a>
      </div>
      <div className="footer_copyright">
        <small>EGATOR Tutorials. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer