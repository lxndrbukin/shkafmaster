import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from './Input';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { changeUserData } from '../../actions';
import profileLocalization from '../assets/Localization/profileLocalization.json';

class ChangeForm extends React.Component {
  onSubmit = (formValues) => {
    this.props.changeUserData(formValues);
  };

  render() {
    return (
      <form className='form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field component={Input} label='User ID' name='_id' disabled />
        <Field
          component={Input}
          label={profileLocalization.change.fullName[this.props.language]}
          name='fullName'
        />
        <Field
          component={Input}
          label={profileLocalization.change.email[this.props.language]}
          name='email'
        />
        <input type='submit' className='form-button' />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    initialValues: {
      _id: state.currentUser ? state.currentUser._id : '',
      fullName:
        state.currentUser && state.currentUser.fullName
          ? state.currentUser.fullName
          : '',
      email:
        state.currentUser && state.currentUser.email
          ? state.currentUser.email
          : '',
    },
  };
};

const changeForm = reduxForm({ form: 'changeForm', enableReinitialize: true })(
  ChangeForm
);

export default connect(mapStateToProps, { changeUserData })(changeForm);
