import React from 'react';
import CategoryItem from './CategoryItem';
import { categoryItems } from './categoryItems';

class CategoryItems extends React.Component {
  renderItems() {
    return categoryItems.map((item, idx) => {
      return (
        <CategoryItem
          key={idx}
          name={item.name}
          img={item.img}
          price={item.price}
          category={this.renderItems.category}
        />
      );
    });
  }

  render() {
    return <div className='category-items'>{this.renderItems()}</div>;
  }
}

export default CategoryItems;
