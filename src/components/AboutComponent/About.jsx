import React from 'react';
import './About.css';
import Me from '../../assets/banner-img.jpg';
import award from '../../assets/Behance.svg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <img src={award} alt="" className='about_icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
          

            <article className='about_card'>
              <img src={award} alt="" className='about_icon' />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>

            <article className='about_card'>
              <img src={award} alt="" className='about_icon' />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatem quaerat optio laudantium ratione, in debitis tenetur quis dolor commodi aliquid eum, laborum deserunt perspiciatis numquam officia iste nostrum autem.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
          
      </div>
    </section>
  )
}

export default About