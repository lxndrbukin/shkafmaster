import React from 'react';
import { NavLink } from 'react-router-dom';
import './Button.scss';

export const Button = ({ name, url, borderColor, bgColor }) => {
  return (
    <NavLink to={url}>
      <button
        className='btn'
        style={{ borderColor: borderColor, backgroundColor: bgColor }}
      >
        {name}
      </button>
    </NavLink>
  );
};

export const ExternalButton = ({ name, url, borderColor, bgColor }) => {
  return (
    <a href={url}>
      <button
        className='btn'
        style={{ borderColor: borderColor, backgroundColor: bgColor }}
      >
        {name}
      </button>
    </a>
  );
};
