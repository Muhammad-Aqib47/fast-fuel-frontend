import './App.css';
import Navbar from './components/landing-page/navbar';
import Carousal from './components/landing-page/banner';
import Video from './components/landing-page/how it works';
import ServicesCard from './components/landing-page/services-card';
import ServeAreas from './components/landing-page/where we serve';
import Footer from './components/landing-page/footer';
import Faqs from './components/landing-page/faqs';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      {/* <Routes>
      <Route path='/' element = {<Carousal />} />
      <Route path='/how-it-work' element = {<Video />} />

      </Routes> */}
    
      <Carousal/>
      <Video/>
      <ServicesCard />
      <Faqs/>
      <ServeAreas/>
      <Footer/>
    </div>
  );
}

export default App;
