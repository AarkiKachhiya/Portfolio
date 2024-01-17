import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const HeaderSocials = () => {
  return (
    <>
    <div className="header__socials">
        <a href="https://likedin.com"><BsLinkedin /></a>
        <a href="https://github.com"><FaGithub/></a>
        <a href="https://instagram.com"><FaInstagram/></a>

    </div>
    </>
  )
}

export default HeaderSocials