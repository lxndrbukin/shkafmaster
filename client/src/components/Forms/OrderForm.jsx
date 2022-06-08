import React from 'react';
import '../assets/Form.scss';
import orderLocalization from '../assets/Languages/orderLocalization.json';
import { lang } from '../assets/Languages/language';
import { reduxForm, Field } from 'redux-form';
import { Input, Textarea, Select } from './Input';

class OrderForm extends React.Component {
	categories = () => {
		return ['-', 'Шкафы', 'Кухни'];
	}

	onSubmit = (formValues) => {
		console.log(formValues);
		this.props.onSubmit(formValues);
	}
	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form">
				<Field component={Input} type="text" label={ orderLocalization.orderForm.name[lang] } name="name" />
				<Field component={Input} type="text" label={ orderLocalization.orderForm.phoneNumber[lang] } name="phone" />
				<Field component={Select} options={this.categories()} type="text" label={ orderLocalization.orderForm.itemType[lang] } name="item" />
				<Field component={Textarea} label={ orderLocalization.orderForm.comments[lang] } name="comment" />
				<input type="submit" value={ orderLocalization.orderForm.orderButton[lang] } className="form-button" />
			</form>
		)
	}
}
export default reduxForm({ form: 'makeOrder' })(OrderForm);
