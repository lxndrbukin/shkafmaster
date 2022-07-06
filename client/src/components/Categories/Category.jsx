import React from 'react';
import { active, categories } from './categoryVars';

const Category = ({ name, defaultCategory, num, changeNum }) => {
  window.addEventListener('resize', () => {
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
