import React from 'react'
import './footer.css'
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { RiDiscordFill } from "react-icons/ri";




const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer_logo'>Aarki</a>

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#Experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>



    </ul>

    <div className='footer_socials'>
      <a href="https://twitter.com"><RiTwitterXLine/></a>
      <a href="https://instagram.com"><FaInstagram/></a>
      <a href="https://discord.com"><RiDiscordFill/></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; Aarki Kachhiya. All rights reserved.</small>
    </div>
   </footer>
  )
}

export default Footer