import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input, Textarea, Select } from './Input';
import { Navigate } from 'react-router-dom';
// import { Button } from '../assets/Button/Button';
import { connect } from 'react-redux';
import { addOffer } from '../../actions';

class OfferForm extends React.Component {
  options() {
    return ['-', '-5%', '-10%'];
  }

  onSubmit = (formValues) => {
    this.props.addOffer(formValues);
    return <Navigate to='/' />;
  };

  render() {
    return (
      <form
        className='form'
        style={{ justifyContent: 'center', display: 'flex' }}
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div className='form_rows'>
          <div className='form_row'>
            <Field component={Input} label='Name RU' name='nameRU' />
            <Field component={Input} label='Name RO' name='nameRO' />
          </div>
          <Field
            component={Select}
            options={this.options()}
            label='Discount'
            name='discount'
          />
          <div className='form_row'>
            <Field component={Textarea} label='Text RU' name='textRU' />
            <Field component={Textarea} label='Text RO' name='textRO' />
          </div>
          <input type='submit' className='form-button' />
        </div>
      </form>
    );
  }
}

const offerForm = reduxForm({ form: 'newOffer' })(OfferForm);

export default connect(null, { addOffer })(offerForm);
