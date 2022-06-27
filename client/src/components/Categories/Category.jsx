import React from 'react';
import './Categories.scss';
import { categoriesList } from './categoriesList';

const Category = () => {
  const categories = () => {
    return categoriesList.map((category, idx) => {
      return (
        <div key={idx} className='category'>
          <div
            className='category-background'
            style={{ backgroundImage: `url(${category.background})` }}
          ></div>
          <div className='category-header'>
            <div className='category-name'>{category.name.ru}</div>
          </div>
        </div>
      );
    });
  };

  return categories();
};

export default Category;
