import React from 'react'
import Resume_Aarki from '../../assets/Resume_Aarki.pdf'

const CTA = () => {
  return (
   <>
    <div className="cta">
        <a href={Resume_Aarki} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's talk</a>
    </div>
   </>
  )
}

export default CTA