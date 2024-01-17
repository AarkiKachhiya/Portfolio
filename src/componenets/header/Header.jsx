import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import Me from '../../assets/Me.png'
import HeaderSocials from './HeaderSocials.jsx'

const Header = () => {
  return (
    <>
     <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h2>Aarki Kachhiya</h2>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={Me} alt="photo" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
     </div>
    </>
  )
}

export default Header