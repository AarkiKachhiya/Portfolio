import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";


const Experience = () => {
  return (
    <section id='Experience'>

      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

     <div className="container experience__container" >
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icons'/>
          <div><h4>HTML</h4>
          <small className='color-light'>Experienced</small>
          </div>
          </article>

          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icons'/>
          <div><h4>CSS</h4>
          <small className='color-light'>Experienced</small>
          </div>
          </article>

          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icons'/>
          <div><h4>JavaScript</h4>
          <small className='color-light'>Experienced</small>
          </div>
          </article>

          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icons'/>
          <div><h4>Bootstrap</h4>
          <small className='color-light'>Experienced</small>
          </div>
          </article>

          <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icons'/>
          <div><h4>ReactJs</h4>
          <small className='color-light'>Experienced</small>
          </div>
          </article>

        </div>
      </div>
      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience_content">
        <article className='experience__details'>
         <BsFillPatchCheckFill className='experience__details-icons'/>
          <div><h4>NodeJs</h4>
           <small>Learning</small>
           </div>
        </article>

        <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icons'/>
          <div><h4>MongoDB</h4>
           <small>Learning</small>
           </div>
        </article>

        <article className='experience__details'>
          <BsFillPatchCheckFill className='experience__details-icons'/>
          <div><h4>ExpressJs</h4>
           <small>Learning</small>
           </div>
        </article>
        </div>
      </div>
     </div>


    </section>
  )
}

export default Experience