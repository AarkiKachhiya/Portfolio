import React from 'react'
import './about.css'
import Me2 from '../../assets/Me2.jpg';
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";




const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me2} alt="about-pic" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>0</small>
            </article>
            <article className='about__card'>
              <FaFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>3</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae commodi quod vel adipisci fugit vitae. Quod alias impedit ab tenetur, ratione ad architecto quaerat iste quos pariatur tempore praesentium excepturi!</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About