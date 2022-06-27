import React from 'react';

const Category = ({ name, background }) => {
  return (
    <div className='category'>
      <div
        className='category-background'
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className='category-header'>
        <div className='category-name'>{name}</div>
      </div>
    </div>
  );
};

export default Category;
