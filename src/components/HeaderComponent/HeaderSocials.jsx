import React from 'react';
import './Header.css'
import bh from '../../assets/Behance.svg';
import inst from '../../assets/instagram.png';
import twi from '../../assets/twitter.png'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://instagram.com" target="_blank"><img src={inst} alt="" /></a>
        <a href="https://behance" target="_blank"><img src={bh} alt="" /></a>
        <a href="https://twitter.com" target="_blank"><img src={twi} alt="" /></a>

    </div>
  )
}

export default HeaderSocials