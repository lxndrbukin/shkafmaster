import React from 'react';
import './Categories.scss';
import Category from './Category';
import { categoriesList } from '../assets/categoriesList';

class Categories extends React.Component {
  render() {
    const categories = Array.from(document.querySelectorAll('.category'));
    const categoriesDiv = document.querySelector('.categories');
    return (
      <div className='categories-wrapper block-wrapper'>
        {/* <div className='categories block-header'>{this.props.name}</div> */}
        <div className='categories'>
          {categoriesList.map((category, idx) => {
            return (
              <Category
                key={idx}
                background={category.background}
                name={category.name[this.props.language]}
                url={category.name['en'].toLowerCase()}
                defaultCategory={categoriesList[0].name[this.props.language]}
                num={idx}
              />
            );
          })}
        </div>
        <div
          className='categories_activity'
          style={categoriesDiv ? { width: categoriesDiv.offsetWidth + 'px' } : {width: '300px'}}
        >
          <div
            style={
              categories[0]
                ? { width: categories[0].offsetWidth + 'px' }
                : { width: '100px' }
            }
            className='category_active'
          ></div>
        </div>
      </div>
    );
  }
}

export default Categories;
