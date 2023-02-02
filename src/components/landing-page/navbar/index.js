import { Link } from 'react-router-dom';
import './style.css'

function Navbar() {
  return (
    <div>
      <nav>
        <div class="left">
          <img src="./images/logowhite.png" alt="logo" className="logo" />
        </div>
        <div className="middle">
          <a href="#section-1">Home</a>
          <a href="#section-2">How it Works</a>
          <a href="#section-3">Our Services</a>
          <a href="#section-4">FAQs</a>
          <a href="#section-5">Contact Us</a>
          {/* <Link to="/contact-us">Contact US</Link> */}
        </div>
        <div className="right">
          <button><span>Seller</span></button>
          <button><span>Buyer</span></button>
        </div>
      </nav>
      
    </div>
  );
}

export default Navbar;