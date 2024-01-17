import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs"
import emailjs from 'emailjs-com'
import { useRef } from 'react';



const Contact = () => {

  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6624f0w', 'template_wsvgl56', e.target, '0px_xuMvr1LmN5eH1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>aarkikachhiya@gmail.com</h5>
            <a href="mailto:aarkikachhiya@gmail.com" target='_blank'>Send a message </a>
          </article>

          <article className='contact_option'>
            <RiLinkedinBoxFill className='contact_option-icon'/>
            <h4>Linkedin</h4>
            <h5>https://www.linkedin.com/aarki-kachhiya</h5>
            <a href="https://www.linkedin.com/feed/?trk=404_page" target='_blank'>Send a message </a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+916354309745</h5>
            <a href="https://api.whatsapp.com/send?phone+916354309745" target='_blank'>Send a message </a>
          </article>
        </div>
        {/* end of contact options */}

        <form action={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Youe Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message"  cols="30" rows="10" placeholder='Your Message'  id='#myform' required/>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact