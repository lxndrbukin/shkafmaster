import React from 'react';
import './Page.scss';
import bodyLocalization from '../assets/Localization/bodyLocalization.json';
import { lang } from '../assets/Localization/language';
import Offers from '../Offers/Offers';
import Categories from '../Categories/Categories';

class MainPage extends React.Component {
  render() {
    return (
      <div className='page-wrapper'>
        <div className='page'>
          <Categories name={bodyLocalization.categories[this.props.language]} />
          <Offers name={bodyLocalization.offers[this.props.language]} />
        </div>
      </div>
    );
  }
}

export default MainPage;
