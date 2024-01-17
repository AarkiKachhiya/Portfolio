import React from 'react'
import './nav.css';
import { AiOutlineHome } from "react-icons/ai"
import { FaUser } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import { useState } from 'react';





const Nav = () => {

  const[activeNav, setActiveNav]=useState('#')
  return (
   
   <nav>

   <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '# ' ? 'active':''}><AiOutlineHome/></a>
   <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about ' ? 'active':''}><FaUser/></a>
   <a href="#Experience" onClick={()=>setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active':''}><BiBook/></a>
   <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services ' ? 'active':''}><RiServiceLine/></a>
   <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact ' ? 'active':''}><TiContacts/></a>
   </nav>
   
   
  )
}

export default Nav