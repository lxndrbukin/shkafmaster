import React, { useState, useEffect } from 'react';

const Category = ({ name, defaultCategory, num, changeNum }) => {
  const active = document.querySelector('.category_active');

  window.addEventListener('resize', () => {
    const categories = Array.from(document.querySelectorAll('.category'));
    const active = document.querySelector('.category_active');

    active.style.width = `${categories[num].offsetWidth}px`;
    active.style.marginLeft = `${
      categories[num].getBoundingClientRect().left
    }px`;
  });

  const categoryButtons = () => {
    return (
      <button
        name={name}
        className='category'
        onClick={(e) => {
          if (active) {
            active.style.width = `${e.target.offsetWidth}px`;
            active.style.marginLeft = `${
              e.target.getBoundingClientRect().left + window.pageXOffset
            }px`;
          }
          changeNum();
          console.log(num);
        }}
      >
        {name}
      </button>
    );
  };

  return categoryButtons();
};

export default Category;
