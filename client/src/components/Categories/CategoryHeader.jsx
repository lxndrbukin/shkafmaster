import React, { useEffect } from 'react';
import {
  categoryActive,
  categorySlider,
  categoryResizeActive,
} from './categoryVars';

const CategoryHeader = ({ name, change, num }) => {
  useEffect(() => {
    categorySlider();
    categoryResizeActive(num);
  });

  const categoryButtons = () => {
    return (
      <button
        name={name}
        className='category'
        onClick={(e) => {
          categoryActive(e);
          change();
        }}
      >
        {name}
      </button>
    );
  };

  return categoryButtons();
};

export default CategoryHeader;
