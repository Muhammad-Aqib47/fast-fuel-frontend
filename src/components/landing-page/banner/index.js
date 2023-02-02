import React from 'react';
import './style.css';

function Banner() {
    return (
        <div>
            <div className="banner" id='section-1'>
                <img src="./images/is.jpg" alt="Banner" />
                <div className="banner-text">
                <h1 className='banner-heading'><span>On-Demand Fuel Delivery Service</span></h1>
                </div>
            </div>
        </div>
    );
}
export default Banner;