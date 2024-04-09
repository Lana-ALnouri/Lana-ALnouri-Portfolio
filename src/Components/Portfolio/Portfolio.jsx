import React from 'react'
import './PortfolioStyle.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Portfolio = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll:1,
        
    };
    return (
      <div id='Portfolio' className='Portfolio'>
      <h1>PORTFOLIO</h1>
      <div className='PortfolioCards'>
        <Slider {...settings}>
            <div>
            <p>The project was built using Bootstrap ,HTML ,CSS</p>
            <a href="https://lana-alnouri.github.io/semi-final/" target='_blank'>
                <img src={props.bootstrapPortfolio} alt="" className='portImg' />
            </a>
            </div>
            <div>
            <p>The project was built using pure HTML ,CSS</p>
            <a href="https://lana-alnouri.github.io/vica-first-project/" target='_blank'>
                <img src={props.furniture} alt="" className='portImg' />
            </a>
            </div>
            <div>
            <p>The project was built using pure HTML ,CSS</p>
            <a href="https://lana-alnouri.github.io/Rent-Up-HTML/" target='_blank'>
                <img src={props.RentUp} alt="" className='portImg' />
            </a>
            </div>
            <div>
            <p>The project was built using React ,JS</p>
            <a href="https://lana-alnouri.github.io/Homeverse-react-vite/" target='_blank'>
                <img src={props.HomeversePortfolio}  alt="" className='portImg' />
              </a>
            </div>
            <div>
            <p>The project was built using pure React ,JS</p>
          <a href="https://lana-alnouri.github.io/TravelMultiPages-react-vite/" target='_blank'>
                <img src={props.travel} alt="" className='portImg' />
              </a>
            </div>
            <div>
            <p>The project was built using pure React ,JS ,Tailwind... with API </p>
            <a href="https://lana-alnouri.github.io/book-react-tailwind/" target='_blank'>
              <img src={props.tailwindpro} alt="" className='portImg' />
            </a>
            </div>
        </Slider>
        </div>
        </div>
    );
}

export default Portfolio;


