import React from 'react'
import Navbar from '../landing-page/navbar';
import Banner from '../landing-page/banner'
import Video from '../landing-page/how it works'
import ServicesCard from '../landing-page/services-card';
import Faqs from '../landing-page/faqs';
import ServeAreas from '../landing-page/where we serve';
import Footer from '../landing-page/footer';
import Contact from '../landing-page/contact-us';


function LandingPage() {
  return (
    <div>
    <Navbar />
     <Banner />
      <Video/>
      <ServicesCard />
      <Faqs/>
      <ServeAreas/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default LandingPage