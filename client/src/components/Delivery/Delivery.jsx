import React from 'react';
import './Delivery.scss';
import { lang } from '../assets/Languages/language';
import deliveryLocalization from '../assets/Languages/deliveryLocalization.json';
import { deliverySteps, deliveryHeaders } from './deliverySteps';

const Delivery = ({ height, openSteps }) => {
  const showSteps = () => {
    return deliveryLocalization[0].steps.map((step, idx) => {
      return (
        <div key={idx} className="delivery_step">
          <div className="delivery_step-img">
            <img alt={step.header[lang]} src={step.icon} />
          </div>
          <div className="delivery_step-info">
            <div className="delivery_step-header">
              {step.header[lang]}
            </div>
            <div className="delivery_step-text">
              {step.text[lang]}
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="delivery_wrapper">
      <div onClick={() => openSteps()} className="delivery-header-wrapper">
        <div className="delivery-header">
            <span>Как мы работаем</span>
          <div className="delivery-header-chevron">
            <i 
              style={height !== 0 ? {transform: 'rotate(180deg)', top: '5px'} : {transform: 'rotate(0deg)'} } 
              className="fas fa-chevron-down"
            >
            </i>
          </div>
        </div>
      </div>
      <div style={{maxHeight: height}} className="delivery_main-box">
        <div className="delivery_steps">
          {showSteps()}
        </div>
      </div>
    </div>
  )
}

export default Delivery;