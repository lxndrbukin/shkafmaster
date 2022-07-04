import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({ name, defaultCategory, num }) => {
  const categories = Array.from(document.querySelectorAll('.category'));
  const active = document.querySelector('.category_active');

  return (
    <button
      className='category'
      onClick={(e) => {
        console.log(e.target.getBoundingClientRect().width);
        console.log(e.target.getBoundingClientRect().left);
        active.style.width = `${e.target.offsetWidth}px`;
        active.style.marginLeft = `${categories[num].offsetWidth * num}px`;
      }}
    >
      {name}
    </button>
  );
};

export default Category;
