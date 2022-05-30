import React from 'react';
import OrderForm from '../Forms/OrderForm';
import {connect} from 'react-redux';
import { makeOrder } from '../../actions';

class OrderPage extends React.Component {
	onSubmit = (formValues) => {
		this.props.makeOrder(formValues);
	}

	render() {
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

export default connect(null, { makeOrder })(OrderPage);