import React from 'react';
import '../assets/Form.scss';
import { reduxForm, Field } from 'redux-form';
import { Input, Textarea, Select } from './Input';

class OrderForm extends React.Component {
	onSubmit = (formValues) => {
		console.log(formValues);
		this.props.onSubmit(formValues);
	}
	render() {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form">
				<Field component={Input} type="text" label="Имя" name="name" />
				<Field component={Input} type="text" label="Мобильный телефон" name="phone" />
				<Field component={Select} type="text" label="Товар" name="item" />
				<Field component={Textarea} label="Комментарии" name="comment" />
				<input type="submit" value="Заказать" className="form-button" />
			</form>
		)
	}
}
export default reduxForm({ form: 'makeOrder' })(OrderForm);
