import React from 'react';
import '../assets/Form.scss';
import orderLocalization from '../assets/Localization/orderLocalization.json';
import { lang } from '../assets/Localization/language';
import { reduxForm, Field } from 'redux-form';
import { Input, Textarea, Select } from './Input';
import { connect } from 'react-redux';
import { makeOrder, fetchUser } from '../../actions';

class OrderForm extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  categories = () => {
    return ['-', 'Шкафы', 'Кухни'];
  };

  onSubmit = (formValues) => {
    this.props.makeOrder(formValues);
  };

  render() {
    return (
      <div className='order-form-container'>
        <div className='order-form-header'>
          {orderLocalization.orderForm.header[lang]}
        </div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className='form'
        >
          <Field
            component={Input}
            type='text'
            label={orderLocalization.orderForm.name[lang]}
            name='name'
          />
          <Field
            component={Input}
            type='text'
            label={orderLocalization.orderForm.phoneNumber[lang]}
            name='phone'
          />
          <Field
            component={Select}
            options={this.categories()}
            type='text'
            label={orderLocalization.orderForm.itemType[lang]}
            name='item'
          />
          <Field
            component={Textarea}
            label={orderLocalization.orderForm.comments[lang]}
            name='comment'
          />
          <input
            type='submit'
            value={orderLocalization.orderForm.orderButton[lang]}
            className='form-button'
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
    currentUser: state.currentUser,
    initialValues: {
      name: state.currentUser ? state.currentUser.fullName : '',
    },
  };
};
const orderForm = reduxForm({ form: 'makeOrder', enableReinitialize: true })(
  OrderForm
);
export default connect(mapStateToProps, { makeOrder, fetchUser })(orderForm);
