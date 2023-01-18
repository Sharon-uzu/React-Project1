import React from 'react';
import './Portfolios.css';
import Img1 from '../../assets/home2.jpg';
import Img2 from '../../assets/home1.jpg';

// Do not use the image in production

const data = [
 {
  id:1,
  image: Img1,
  title: 'Project 1',
  github: 'https://github.com',
  demo: 'http://cornerstone23.netlify.app'
 } ,
 {
  id:2,
  image: Img2,
  title: 'Project 2',
  github: 'https://github.com',
  demo: 'http://cornerstone23.netlify.app'
 } ,
 {
  id:3,
  image: Img1,
  title: 'Project 3',
  github: 'https://github.com',
  demo: 'http://cornerstone23.netlify.app'
 } ,
 {
  id:4,
  image: Img2,
  title: 'Project 4',
  github: 'https://github.com',
  demo: 'http://cornerstone23.netlify.app'
 } ,
 {
  id:5,
  image: Img1,
  title: 'Project 5',
  github: 'https://github.com',
  demo: 'http://cornerstone23.netlify.app'
 } ,

 {id:6,
  image: Img2,
  title: 'Project 6',
  github: 'https://github.com',
  demo: 'http://cornerstone23.netlify.app'
 }
]


const Portfolios = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">


          {
            data.map(({id, image, title, github, demo}) => {
              return(
              <article className="portfolio_item">
              <div className="portfolio_item_img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              
            </article>
            )
            })
          }

        {/*

        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={Img2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={Img1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={Img2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={Img1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={Img2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolios