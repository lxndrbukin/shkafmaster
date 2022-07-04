import React from 'react';
import './Categories.scss';
import Category from './Category';
import { categoriesList } from '../assets/categoriesList';

class Categories extends React.Component {
  render() {
    const categories = Array.from(document.querySelectorAll('.category'));
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
          style={
            categories[0]
              ? {
                  width: categories[0].offsetWidth + 'px',
                  marginLeft: categories[0].getBoundingClientRect().left + 'px',
                }
              : { width: '0px', display: 'none' }
          }
          className='category_active'
        ></div>
      </div>
    );
  }
}

export default Categories;
