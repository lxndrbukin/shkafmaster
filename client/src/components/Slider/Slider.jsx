import React, { useEffect } from 'react';
import './Slider.scss';
import { slidesList } from './slidesList';
import { sliderAnimation } from './sliderAnimation';

const Slider = () => {
  useEffect(() => sliderAnimation('slider'));

  const sliderBtns = () => {
    return slidesList.map((slide, idx) => {
      return (
        <React.Fragment key={idx}>
          <div className='slider-button'></div>
        </React.Fragment>
      );
    });
  };

  const showSlides = () => {
    return slidesList.map((slide, idx) => {
      return (
        <div key={idx} className='slide-wrapper'>
          <div
            style={{ backgroundImage: `url(${slide.img})` }}
            className='slide'
          >
            <div className='slide-info'>
              <div className='slide-name'>
                <span>{slide.name.ru}</span>
              </div>
              <div className='slide-text'>
                <span>{slide.text.ru}</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className='slider-wrapper'>
      <div className='slider'>{showSlides()}</div>
      <div className='slider-buttons'>{sliderBtns()}</div>
    </div>
  );
};

export default Slider;
