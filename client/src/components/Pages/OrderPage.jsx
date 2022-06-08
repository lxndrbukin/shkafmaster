import React from 'react';
import OrderForm from '../Forms/OrderForm';
import { connect } from 'react-redux';
import { lang } from '../assets/Languages/language';
import orderLocalization from '../assets/Languages/orderLocalization.json';
import { makeOrder, fetchOrders } from '../../actions';

class OrderPage extends React.Component {
	onSubmit = (formValues) => {
		this.props.makeOrder(formValues);
	}

	render() {
		this.props.fetchOrders();
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

export default connect(null, { makeOrder, fetchOrders })(OrderPage);