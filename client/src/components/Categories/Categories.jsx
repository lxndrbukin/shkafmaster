import React from 'react';
import './Categories.scss';
import CategoryHeader from './CategoryHeader';
import { categoriesList } from '../assets/categoriesList';
import CategoryItems from './CategoryItems';
import {
  categoryResizeActive,
  activeStyling,
  componentMountActive,
} from './categoryVars';

class Categories extends React.Component {
  state = {
    num: 0,
  };

  componentDidUpdate() {
    categoryResizeActive(this.state.num);
  }

  componentDidMount() {
    categoryResizeActive(this.state.num);
    componentMountActive(this.state.num);
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
        <div className='category_slide' key={idx}>
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
          style={activeStyling(this.state.num)}
          className='category_active'
        ></div>
        <div className='category_slides'>{this.categoryItems()}</div>
      </div>
    );
  }
}

export default Categories;
