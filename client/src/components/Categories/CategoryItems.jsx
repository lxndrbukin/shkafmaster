import React from 'react';
import CategoryItem from './CategoryItem';
import { categoryItemsList } from './categoryItemsList';

class CategoryItems extends React.Component {
  renderItems() {
    return categoryItemsList.map((item, idx) => {
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
