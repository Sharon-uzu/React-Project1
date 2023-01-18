import React from 'react';
import './Testimonial.css';
import Avatar1 from '../../assets/asset 11.jpeg';
import Avatar2 from '../../assets/asset 7.jpeg'


const data = [
  {
    avatar: Avatar1,
    names: 'Christy',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam saepe quibusdam a, consequuntur eos sint tenetur aut maxime sunt, nam obcaecati, enim fugit id totam voluptate'
  },
  {
    avatar: Avatar2,
    names: 'Christy',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam saepe quibusdam a, consequuntur eos sint tenetur aut maxime sunt, nam obcaecati, enim fugit id totam voluptate'
  },
  {
    avatar: Avatar1,
    names: 'Christy',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam saepe quibusdam a, consequuntur eos sint tenetur aut maxime sunt, nam obcaecati, enim fugit id totam voluptate'
  },
  {
    avatar: Avatar2,
    names: 'Christy',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam saepe quibusdam a, consequuntur eos sint tenetur aut maxime sunt, nam obcaecati, enim fugit id totam voluptate'
  }
]

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        {
          data.map(({avatar, names, review}, index) =>{
            return(
              <article key={index} className="testimonial">
          <div className="client_avatar">
            <img src={avatar} alt="" />
          </div>
          <h5 className='client_name'>{names}</h5>
            <small className='client_review'>{review}</small>
        </article>
            )

          })
        }
        
        {/* <article className="testimonial">
          <div className="client_avatar">
            <img src={Avatar2} alt="" />
          </div>
          <h5 className='client_name'>Christy</h5>
            <small className='client_review'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam saepe quibusdam a, consequuntur eos sint tenetur aut maxime sunt, nam obcaecati, enim fugit id totam voluptate</small>
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={Avatar1} alt="" />
          </div>
          <h5 className='client_name'>Christy</h5>
            <small className='client_review'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam saepe quibusdam a, consequuntur eos sint tenetur aut maxime sunt, nam obcaecati, enim fugit id totam voluptate</small>
        </article>
        <article className="testimonial">
          <div className="client_avatar">
            <img src={Avatar2} alt="" />
          </div>
          <h5 className='client_name'>Christy</h5>
            <small className='client_review'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet laboriosam saepe quibusdam a, consequuntur eos sint tenetur aut maxime sunt, nam obcaecati, enim fugit id totam voluptate</small>
        </article> */}
      </div>
    </section>
  )
}

export default Testimonial