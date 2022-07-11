import React, { useEffect } from 'react';

const Category = ({ name, num, change }) => {
  const active = document.querySelector('.category_active');
  const categories = Array.from(document.querySelectorAll('.category'));
  const categoryItems = document.querySelector('.category_items');
  const categoriesContent = Array.from(
    document.querySelectorAll('.category_content')
  );

  useEffect(() => {
    for (let i = 0; i < categories.length; i++) {
      categories[i].addEventListener('click', () => {
        categoryItems.style.transform = `translateX(-${
          i * categoriesContent[0].offsetWidth
        }px)`;
      });
    }
  });

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
          change();
        }}
      >
        {name}
      </button>
    );
  };

  return categoryButtons();
};

export default Category;
