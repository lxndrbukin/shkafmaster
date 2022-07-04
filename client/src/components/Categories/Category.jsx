import React, { useState } from 'react';

const Category = ({ name, defaultCategory, num }) => {
  const [catNum, setCatNum] = useState(0);
  const active = document.querySelector('.category_active');

  window.addEventListener('resize', () => {
    const categories = Array.from(document.querySelectorAll('.category'));
    const active = document.querySelector('.category_active');

    active.style.width = `${categories[catNum].offsetWidth}px`;
    active.style.marginLeft = `${
      categories[catNum].getBoundingClientRect().left
    }px`;

    console.log(catNum);
  });

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
        setCatNum(num);
      }}
    >
      {name}
    </button>
  );
};

export default Category;
