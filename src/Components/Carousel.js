import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assests/fondation/Suvidha-1.jpg'
import img2 from '../assests/fondation/Suvidha-3 (1).jpg'
import img3 from '../assests/fondation/Suvidha-5.jpg'
import './comp.css'
function MyCarousel() {
  return (
    <div>
        <Carousel>
      <Carousel.Item interval={1000}>
        <img src={img1} alt="First slide" style={{ height: '86vh', width: "100%" }} />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src={img2} alt="Second slide" style={{ height: '86vh', width: "100%" }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="Third slide" style={{ height: '86vh', width: "100%" }} />
      </Carousel.Item>
    </Carousel>

    <div className='hero hero2'>
      <div className='pp'>Get Your Donation Tax Exempted</div>
      <div><Link  className='btn' to="helpPage">Donate Now</Link> <Link className='btn' to='/videoPage'>Watch video</Link> </div>
    </div>

    </div>
  
  );
}

export default MyCarousel;

