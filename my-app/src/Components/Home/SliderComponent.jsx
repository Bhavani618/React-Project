import React from 'react';
import Slider from 'react-slick';
import './SliderComponent.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const SliderComponent = () => {
  const settings = {
    infinite: true,
    speed: 500,
    // autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const slides = [
    {
      title: "50% Off For Your First Shopping",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      image: "./Images/watch-07.png"
    },
    {
      title: "50% Off For Your First Shopping",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      image: "./Images/phone-08.png"
    },
    {
      title: "50% Off For Your First Shopping",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      image: "./Images/wireless-01.png"
    }
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-content">
              <div className="slide-details">
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-description">{slide.description}</p>
                <a href="#!" className="slide-button">Visit Collections</a>
              </div>
              <div className="slide-image">
                <img src={slide.image} alt={slide.title} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
