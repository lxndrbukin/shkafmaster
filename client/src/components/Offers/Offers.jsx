import React from 'react';
import './Offers.scss';
import { offerList } from './offerList';
import Offer from './Offer';

class Offers extends React.Component {
	renderOfferList = () => {
		return offerList.map((offer, idx) => {
			return (
				<Offer 
					key={idx} 
					reduce={offer.reduce}
					name={offer.name} 
					text={offer.text}
					imgs={offer.imgs}
					path={offer.path}
				/>
			)
		})
	}

	render() {
		return (
			<div className="offers-wrapper block-wrapper">
				<div className="offers">
					<div className="offers-header block-header">
						{ this.props.name }
					</div>
					<div className="offers-list">
						{this.renderOfferList()}
					</div>
				</div>
			</div>
		)
	}
}

export default Offers;