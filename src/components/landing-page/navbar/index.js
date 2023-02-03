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
          <button className='button'><span className='span'>Seller</span></button>
          <button className='button'><span className='span'>Buyer</span></button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;