import React from 'react';
import './Categories.scss';
import Category from './Category';
import { categoriesList } from './categoriesList';

class Categories extends React.Component {
  render() {
    return (
      <div className='categories-wrapper block-wrapper'>
        {/* <div className='categories block-header'>{this.props.name}</div> */}
        <div className='categories'>
          {categoriesList.map((category, idx) => {
            return (
              <Category
                key={idx}
                background={category.background}
                name={
                  category.name[
                    this.props.language === 'en' ? 'ro' : this.props.language
                  ]
                }
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Categories;
