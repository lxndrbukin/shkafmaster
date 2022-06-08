import React from 'react';
import OrderForm from '../Forms/OrderForm';
import {connect} from 'react-redux';
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
					Заказать
				</div>
				<OrderForm onSubmit={this.onSubmit} />
			</div>
		)
	}
}

export default connect(null, { makeOrder, fetchOrders })(OrderPage);