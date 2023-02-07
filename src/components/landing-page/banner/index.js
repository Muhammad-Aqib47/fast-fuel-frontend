import './style.css';
import ImageSlider, { Slide } from 'react-auto-image-slider';


function Banner() {
    return (
        <div style={{ position: 'static' }}>
            <ImageSlider effectDelay={1500} autoPlayDelay={2000}>
                <Slide>
                    <img alt="img2" src="./images/fuel.jpg" id='slider-img' />
                    <h1 className='banner-heading'><span className='banner-heading-span'>On-Demand Fuel Delivery Service</span></h1>
                </Slide>
                <Slide>
                    <img alt="img2" src="./images/industrial.jpg" id='slider-img' />
                    <h1 className='banner-heading2'><span className='banner-heading-span'>On-Demand Fuel Delivery Service</span></h1>

                </Slide>
                <Slide>
                    <img alt="img1" src="./images/pexels.jpeg" id='slider-img' />
                    <h1 className='banner-heading'><span className='banner-heading-span'>On-Demand Fuel Delivery Service</span></h1>
                </Slide>

                <Slide>
                    <img alt="img1" src="./images/pp.jpeg" id='slider-img' />
                    <h1 className='banner-heading'><span className='banner-heading-span'>On-Demand Fuel Delivery Service</span></h1>
                </Slide>

                <Slide>
                    <img alt="img1" src="./images/Petrol-pump.png" id='slider-img' />
                    <h1 className='banner-heading'><span className='banner-heading-span'>On-Demand Fuel Delivery Service</span></h1>
                </Slide>
            </ImageSlider>
        </div>
    );
}
export default Banner;