import React from 'react';
import './Auth.scss';
import { Input } from './Input';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createUser } from '../../actions';
import { lang } from '../assets/Localization/language';
import authLocalization from '../assets/Localization/authLocalization.json';

class NewAuth extends React.Component {
  onSubmit = (formValues) => {
    this.props.createUser(formValues);
  };

  render() {
    return (
      <form className='form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          component={Input}
          type='text'
          label={authLocalization[4].authForms.email[lang]}
          name='username'
        />
        <Field
          component={Input}
          type='password'
          label={authLocalization[4].authForms.password[lang]}
          name='password'
        />
        <input
          type='submit'
          value={authLocalization[0].authButtons.register[lang]}
          className='form-button'
        />
      </form>
    );
  }
}

const newAuth = reduxForm({ form: 'newUser' })(NewAuth);

export default connect(null, { createUser })(newAuth);
