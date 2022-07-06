import React from 'react';
import './Categories.scss';
import Category from './Category';
import { categoriesList } from '../assets/categoriesList';

class Categories extends React.Component {
  state = {
    num: 0,
    selected: false,
  };

  componentDidMount() {
    this.setState({ num: 0 });
  }

  categoriesList() {
    return categoriesList.map((category, idx) => {
      return (
        <Category
          key={idx}
          background={category.background}
          name={category.name[this.props.language]}
          url={category.name['en'].toLowerCase()}
          num={this.state.num}
          change={() => {
            this.setState({ num: idx, selected: !this.state.selected });
            console.log(this.state.selected);
          }}
          selected={this.state.selected}
        />
      );
    });
  }

  categoryItems() {
    return categoriesList.map((category, idx) => {
      return (
        <div className='category_content'>
          {category.name[this.props.language]}
        </div>
      );
    });
  }

  render() {
    const categories = Array.from(document.querySelectorAll('.category'));
    return (
      <div className='categories-wrapper block-wrapper'>
        {/* <div className='categories block-header'>{this.props.name}</div> */}
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
        <div className='category_items'>{this.categoryItems()}</div>
      </div>
    );
  }
}

export default Categories;
