import React from 'react';
import './Auth.scss';
import '../assets/Form.scss';
import { Input } from './Input';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { lang } from '../assets/Localization/language';
import { loginUser } from '../../actions';
import authLocalization from '../assets/Localization/authLocalization.json';

class Auth extends React.Component {
  state = {
    auth: '',
  };

  onSubmit = (formValues) => {
    this.props.loginUser(formValues);
  };

  renderSocialLogin = () => {
    return authLocalization[1].socialAuthButtons.map((button) => {
      return (
        <button
          type='submit'
          style={{ backgroundColor: button.color }}
          className={`form-button social ${
            button.disabled === true ? `disabled` : ''
          }`}
          onClick={() => this.setState({ auth: button.name.toLowerCase() })}
        >
          <i className={button.icon}></i>
          <span>
            {authLocalization[2].text[lang]} {button.name}
          </span>
        </button>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <form
          className='form'
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
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
          <div className='auth-buttons'>
            <input
              type='submit'
              value={authLocalization[0].authButtons.login[lang]}
              className='form-button'
            />
          </div>
        </form>
        <form className='form' action={`/auth/${this.state.auth}`} method='get'>
          <div className='auth-buttons'>{this.renderSocialLogin()}</div>
        </form>
      </React.Fragment>
    );
  }
}

const auth = reduxForm({ form: 'auth' })(Auth);

export default connect(null, { loginUser })(auth);
