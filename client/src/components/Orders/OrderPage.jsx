import React from 'react';
import OrderForm from '../Forms/OrderForm';
import { connect } from 'react-redux';
import { lang } from '../assets/Languages/language';
import orderLocalization from '../assets/Languages/orderLocalization.json';
import { makeOrder } from '../../actions';

class OrderPage extends React.Component {
	onSubmit = (formValues) => {
		this.props.makeOrder(formValues);
	}

	render() {
		
		console.log(this.props.orders);
		return (
			<div className="order-form-container">
				<div className="order-form-header">
					{ orderLocalization.orderForm.header[lang] }
				</div>
				<OrderForm onSubmit={this.onSubmit} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		orders: state.orders
	}
}

export default connect(mapStateToProps, { makeOrder })(OrderPage);