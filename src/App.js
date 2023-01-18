import React from 'react';
import './App.css';
import Header from './components/HeaderComponent/Header';
import Navbar from './components/NavbarComponent/Navbar';
import About from './components/AboutComponent/About';
import Experience from './components/ExperienceComponent/Experience';
import Service from './components/Sevices/Service';
import Testimonial from './components/TestimonialComponent/Testimonial';
import Portfolios from './components/PortfolioComponent/Portfolios';
import Contact from './components/Contacts/Contact';
import Footer from './components/Footers/Footer';

function App() {
  return (
    <>
    <Header/>
     <Navbar/>
    <About/>
    <Experience/>
    <Service/>
    <Portfolios/>
    <Testimonial/>
    <Contact/>
    <Footer/> 
    </>
  );
}

export default App;
