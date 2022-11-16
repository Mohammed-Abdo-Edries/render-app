import React,{ useRef } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_yutqxp8', 'template_7ukvip4', form.current, 'vEjBKvvVFAosxOS7A')     
      .then((result) => {
          window.location.reload(false)
          alert("Message Successfully sent!")
          e.preventDefault();
      }, (error) => {
          alert("Failed to Send Message")
      }
    )
  }
  return (
      <div id="contact" className='contact text-start'>
        <div className="container">
          <div className="title" data-aos="zoom-out-right">Contact me</div>
          <form className="form" ref={form} onSubmit={sendEmail}>
            <ul className='list-unstyled'>
              <div className="row">
              <li className='col-sm-5 col-md-6 col-lg-6'>
                <input type="text" data-aos="fade-up" data-aos-duration="1500" className="info" name="name" placeholder="Name" required/>
              </li>
              <li className='col-sm-5 col-md-6 col-lg-6'>
                <input type="email" data-aos="fade-up" data-aos-duration="1500" className="info" name="email" placeholder="Email" required/>
              </li>
              </div>
              <li>
                <textarea placeholder="Message" data-aos="fade-up" data-aos-duration="1500" className="text" name="message" required></textarea>
              </li>
              <li className='button' data-aos="fade-up" data-aos-duration="1500">
                <input type="submit" className='send' value="SEND" />
                <i className='fa-solid fa-paper-plane'></i>
              </li>
            </ul>
          </form>
          <div className="logos text-center">
            <a href="https://www.linkedin.com/in/mohammed-abdo-92249a247" target="_blank" rel="noopener noreferrer" className="logo"><i className='fa-brands fa-linkedin'></i></a>
            <a href="mailto:mohammed.abdo1916@gmail.com" target="_blank" rel="noopener noreferrer" className="logo"><i className='fa-solid fa-envelope'></i></a>
            <a href="https://github.com/Mohammed-Abdo-Edries" target="_blank" rel="noopener noreferrer" className="logo"><i className='fa-brands fa-github'></i></a>
          </div>
        </div>
      </div>
  )
}

export default Contact