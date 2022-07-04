import React from 'react';
import './Page.scss';
import Offers from '../Offers/Offers';
import Categories from '../Categories/Categories';
import Slider from '../Slider/Slider';
class MainPage extends React.Component {
  render() {
    return (
      <div className='page-wrapper'>
        <div className='page'>
          <Slider />
          <Categories language={this.props.language} />
          {/* <Offers
            language={this.props.language}
            name={bodyLocalization.offers[this.props.language]}
            slice='4'
          /> */}
        </div>
      </div>
    );
  }
}

export default MainPage;
