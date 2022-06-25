import React from 'react';
import './Offers.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchOffers } from '../../actions';
import Offer from './Offer';

class Offers extends React.Component {
  componentDidMount() {
    this.props.fetchOffers();
  }

  showHeader() {
    if (this.props.slice) {
      return (
        <React.Fragment>
          <span>{this.props.name}</span>
          <NavLink to='/offers'>More offers</NavLink>
        </React.Fragment>
      );
    } else {
      return <span>{this.props.name}</span>;
    }
  }

  renderOfferList = () => {
    const { language } = this.props;
    if (!this.props.offers[0]) {
      return 'Loading';
    }
    return this.props.offers.slice(0, this.props.slice).map((offer, idx) => {
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
        <div className='offers-header block-header'>{this.showHeader()}</div>
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
