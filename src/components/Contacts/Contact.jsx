import React from 'react';
import './Contact.css';
import Email from '../../assets/email.png';
import Call from '../../assets/call.png'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Det In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <img src={Email} alt="" className='contact_option-icon' />
            <h4>Email</h4>
            <h5>dummy@gmail.com</h5>
            <a href="mailto:dummy@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <img src={Email} alt="" className='contact_option-icon' />
            <h4>Messengers</h4>
            <h5>Tutorials</h5>
            <a href="https://m.me/christy.dev" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <img src={Call} alt="" className='contact_option-icon' />
            <h4>Call</h4>
            <h5>+234 093 756 4788</h5>
            <a href="mailto:dummy@gmail.com" target='_blank'>Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name="email" id="" placeholder='Email'  required/>
          <textarea name="message"  rows="7" placeholder='Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact