import React from 'react';
import './Service.css';
import Check from '../../assets/check.png'

const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>


      <div className="container services_container">
        <article className="service">
          <div className="service_header">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <img src={Check} alt="" className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem.</p>
            </li>
            <li>
              <img src={Check} alt="" className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem.</p>
            </li>
            <li>
              <img src={Check} alt="" className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem.</p>
            </li>
            <li>
              <img src={Check} alt="" className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem.</p>
            </li>

          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service_header">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <img src={Check} alt="" className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem.</p>
            </li>
            <li>
              <img src={Check} alt="" className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem.</p>
            </li>
            <li>
              <img src={Check} alt="" className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem.</p>
            </li>
            <li>
              <img src={Check} alt="" className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem.</p>
            </li>
            <li>
              <img src={Check} alt="" className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem.</p>
            </li>

          </ul>
        </article>
        {/* End of Web Development */}

        <article className="service">
          <div className="service_header">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <img src={Check} alt="" className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem.</p>
            </li>
            <li>
              <img src={Check} alt="" className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem.</p>
            </li>
            <li>
              <img src={Check} alt="" className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem.</p>
            </li>
            <li>
              <img src={Check} alt="" className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem.</p>
            </li>
            
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>

    </section>
  )
}

export default Service