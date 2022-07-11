import React from 'react';

const CategoryItem = ({ name, price, img }) => {
  return (
    <div className='category-item'>
      <div
        className='category-item_img'
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className='category-item_name'>{name}</div>
      <div className='category-item_price'>From {price} lei</div>
    </div>
  );
};

export default CategoryItem;
