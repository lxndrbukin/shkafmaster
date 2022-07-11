import React from 'react';
import './Categories.scss';
import CategoryHeader from './CategoryHeader';
import { categoriesList } from '../assets/categoriesList';
import CategoryItems from './CategoryItems';

class Categories extends React.Component {
  state = {
    num: 0,
  };

  componentDidMount() {
    this.setState({ num: 0 });
  }

  categoriesList() {
    return categoriesList.map((category, idx) => {
      return (
        <CategoryHeader
          key={idx}
          background={category.background}
          name={category.name[this.props.language]}
          url={category.name['en'].toLowerCase()}
          change={() => {
            this.setState({ num: idx });
          }}
          num={this.state.num}
        />
      );
    });
  }

  categoryItems() {
    return categoriesList.map((category, idx) => {
      return (
        <div className='category_slide'>
          <CategoryItems />
        </div>
      );
    });
  }

  render() {
    const categories = Array.from(document.querySelectorAll('.category'));
    return (
      <div className='categories-wrapper block-wrapper'>
        <div className='categories'>{this.categoriesList()}</div>
        <div
          style={
            categories[this.state.num]
              ? {
                  width: categories[this.state.num].offsetWidth + 'px',
                  marginLeft:
                    categories[this.state.num].getBoundingClientRect().left +
                    'px',
                }
              : { width: '100px' }
          }
          className='category_active'
        ></div>
        <div className='category_slides'>{this.categoryItems()}</div>
      </div>
    );
  }
}

export default Categories;
