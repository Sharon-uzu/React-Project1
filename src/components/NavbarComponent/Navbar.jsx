import React from 'react';
import './Navbar.css';
import Home from '../../assets/homes.png';
import Be from '../../assets/about icon.png';
import exp from '../../assets/love.jfif';
import { useState } from 'react';



const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><img src={Home} alt="" /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><img src={Be} alt="" /></a>
      <a href="#experiences" onClick={() => setActiveNav('#experiences')} className={activeNav === '#experiences' ? 'active' : ''}><img src={exp } alt="" /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><img src={exp } alt="" /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><img src={Be} alt="" /></a>
    </nav>
  )
}

export default Navbar