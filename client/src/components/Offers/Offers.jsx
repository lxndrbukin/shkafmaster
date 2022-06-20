import React from 'react';
import './Offers.scss';
import { offerList } from './offerList';
import { connect } from 'react-redux';
import { fetchOffers } from '../../actions';
import Offer from './Offer';

class Offers extends React.Component {
  componentDidMount() {
    this.props.fetchOffers();
  }

  renderOfferList = () => {
    const { language } = this.props;
    console.log(language);
    if (!this.props.offers[0]) {
      return 'Loading';
    }
    console.log(this.props.offers);
    return this.props.offers.map((offer, idx) => {
      return (
        <Offer
          key={idx}
          reduce={offer.discount}
          name={language === 'ru' ? offer.nameRU : offer.nameRO}
          text={language === 'ru' ? offer.textRU : offer.textRO}
          // imgs={offer.imgs}
          path='/'
        />
      );
    });
  };

  render() {
    return (
      <div className='offers-wrapper block-wrapper'>
        <div className='offers-header block-header'>{this.props.name}</div>
        <div className='offers'>{this.renderOfferList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    offers: state.offers,
  };
};

export default connect(mapStateToProps, { fetchOffers })(Offers);
