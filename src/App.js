import './App.css';
import Navbar from './components/landing-page/navbar';
import Banner from './components/landing-page/banner';
import Video from './components/landing-page/how it works';
import ServicesCard from './components/landing-page/services-card';
import Faqs from './components/landing-page/faqs';
import ServeAreas from './components/landing-page/where we serve';
import Footer from './components/landing-page/footer';
import Contact from './components/landing-page/contact-us';

function App() {
  return (
    <div>
      <Navbar />
      <Banner/>
      <Video/>
      <ServicesCard />
      <Faqs/>
      <ServeAreas/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
