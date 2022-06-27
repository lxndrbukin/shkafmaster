import React from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({ name, background }) => {
  return (
    <NavLink to='/' className='category'>
      <div
        className='category-background'
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className='category-header'>
        <div className='category-name'>{name}</div>
      </div>
    </NavLink>
  );
};

export default Category;
