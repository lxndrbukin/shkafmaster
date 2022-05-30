import React, { useState, useEffect } from 'react';
import './Slider.scss';
import { slidesList } from './slidesList';
import { sliderAnimation } from './sliderAnimation';

const Slider = () => {
    useEffect(() => sliderAnimation('slider'));

    const showSlides = () => {
        return slidesList.map((slide, idx) => {
            return (
                <div key={idx} className="slide-wrapper">
                    <div 
                        style={{backgroundImage: `url(${slide.img})`}} 
                        className="slide"
                    >
                        <div className="slide-info">
                            <div className="slide-name">
                                <span>{slide.name.ru}</span>
                            </div>
                            <div className="slide-text">
                                <span>{slide.text.ru}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
    }

    return (
        <div 
            className="slider-wrapper"
        >
            <div 
                className="slider"
            >
                {showSlides()}
            </div>
            <div className="slider-btn right">
                <i className="fa-solid fa-angle-right"></i>
            </div>
            <div className="slider-btn left">
                <i className="fa-solid fa-angle-left"></i>
            </div>
        </div>
    )
}

export default Slider;