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
          {/* <Link to='/'>Home</Link>
          <Link to='/how-it-work'>How it Work</Link> */}
          <a href="#section-1">Home</a>
          <a href="#section-2">How it Works</a>
          <a href="#section-3">Our Services</a>
          <a href="#section-4">FAQs</a>
          <a href="#section-5">Contact Us</a>
        </div>
        <div className="right">
          <button>Seller</button>
          <button>Buyer</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;