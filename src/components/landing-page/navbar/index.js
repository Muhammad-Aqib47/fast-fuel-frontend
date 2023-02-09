import { Link } from 'react-router-dom';
import './style.css'

function Navbar() {
  return (
    <div id='section-1'>
      <nav className='navbar'>
        <div className="nav-left">
          <img src="./images/capture.png" alt="logo" className="logo" />
        </div>
        <div className="nav-links">
          <a className='anchor' href="#section-1">Home</a>
          <a className='anchor' href="#section-2">How it Works</a>
          <a className='anchor' href="#section-3">Our Services</a>
          <a className='anchor' href="#section-4">FAQs</a>
          <a className='anchor' href="#section-5">Contact Us</a>
        </div>
        <div className="nav-right">
          <Link to="/seller_buyer_orders"><button className='button-1'><span className='span'>Seller</span></button></Link>
          <Link to="/buyer_login"><button className='button-1'><span className='span'>Buyer</span></button></Link>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;