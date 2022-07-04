import React from 'react';
import '../assets/Form.scss';
import orderLocalization from '../assets/Localization/orderLocalization.json';
import { reduxForm, Field } from 'redux-form';
import { Input, Textarea, Select, Checkbox } from './Input';
import { connect } from 'react-redux';
import { makeOrder, fetchUser } from '../../actions';

class OrderForm extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  categories() {
    return ['-', 'Шкафы', 'Кухни'];
  }

  orderSocials() {
    return [
      'Telegram',
      'WhatsApp',
      'Viber',
      orderLocalization.orderForm.orderCallRequest[this.props.language],
    ];
  }

  onSubmit = (formValues) => {
    this.props.makeOrder(formValues);
  };

  checkboxValue() {}

  render() {
    return (
      <div className='order-form-container'>
        <div className='order-form-header'>
          {orderLocalization.orderForm.header[this.props.language]}
        </div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className='form'
        >
          <Field
            component={Input}
            type='text'
            label={orderLocalization.orderForm.name[this.props.language]}
            name='name'
          />
          <Field
            component={Input}
            type='text'
            label={orderLocalization.orderForm.phoneNumber[this.props.language]}
            name='phone'
          />
          {this.orderSocials().map((social, idx) => {
            return (
              <Field
                key={idx}
                component={Checkbox}
                label={social}
                name={
                  social === 'Phone call' ||
                  social === 'Звонок' ||
                  social === 'Apel'
                    ? 'phonecall'
                    : social.toLowerCase()
                }
              />
            );
          })}
          <Field
            component={Select}
            options={this.categories()}
            type='text'
            label={orderLocalization.orderForm.itemType[this.props.language]}
            name='item'
          />
          <Field
            component={Textarea}
            label={orderLocalization.orderForm.comments[this.props.language]}
            name='comment'
          />
          <input
            type='submit'
            value={orderLocalization.orderForm.orderButton[this.props.language]}
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
      telegram: false,
      viber: false,
      whatsapp: false,
      phonecall: false,
    },
  };
};
const orderForm = reduxForm({ form: 'makeOrder', enableReinitialize: true })(
  OrderForm
);
export default connect(mapStateToProps, { makeOrder, fetchUser })(orderForm);
