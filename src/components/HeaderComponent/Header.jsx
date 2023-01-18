import React from 'react';
import './Header.css';
import CTA from './CTA';
import Me from '../../assets/banner-img.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Sharon Uzu</h1>
        <h5 className='text-light'> Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={Me} alt="" />
        </div>

        <a href="#Contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header