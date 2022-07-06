import React from 'react';
import './Categories.scss';
import Category from './Category';
import { categories } from './categoryVars';
import { categoriesList } from '../assets/categoriesList';

class Categories extends React.Component {
  state = {
    num: 0,
  };

  componentDidMount() {
    this.setState({ num: 0 });
  }

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
                name={category.name[this.props.language]}
                url={category.name['en'].toLowerCase()}
                defaultCategory={categoriesList[0].name[this.props.language]}
                num={this.state.num}
                changeNum={() => {
                  this.setState({ num: idx });
                }}
              />
            );
          })}
        </div>
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
      </div>
    );
  }
}

export default Categories;
