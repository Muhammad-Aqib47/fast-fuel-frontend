import React from 'react'
import Navbar from './navbar';
import Banner from './banner'
import Video from './how it works'
import ServicesCard from './services-card';
import Faqs from './faqs';
import ServeAreas from './where we serve';
import Footer from './footer';
import Contact from './contact-us';


function LandingPage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Video />
      <ServicesCard />
      <Faqs />
      <ServeAreas />
      <Contact />
      <Footer />
    </div>
  )
}

export default LandingPage