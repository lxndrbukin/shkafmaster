import React from 'react';
import './Auth.scss';
import '../assets/Form.scss';
import { Input } from './Input';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { lang } from '../assets/Localization/language';
import authLocalization from '../assets/Localization/authLocalization.json';

class Auth extends React.Component {
  render() {
    return (
      <form className='form' action='/auth' method='post'>
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
          {authLocalization[1].socialAuthButtons.map((authButton) => {
            return (
              <button
                type='submit'
                style={{ backgroundColor: authButton.color }}
                className={`form-button social ${
                  authButton.disabled === true ? `disabled` : ''
                }`}
              >
                <i className={authButton.icon}></i>
                <span>
                  {authLocalization[2].text[lang]} {authButton.name}
                </span>
              </button>
            );
          })}
        </div>
      </form>
    );
  }
}

const auth = reduxForm({ form: 'auth' })(Auth);

export default connect(null)(auth);
