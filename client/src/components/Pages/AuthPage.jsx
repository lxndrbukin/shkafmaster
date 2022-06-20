import React from 'react';
import Auth from '../Forms/Auth';
import { lang } from '../assets/Localization/language';
import authLocalization from '../assets/Localization/authLocalization.json';
import NewAuth from '../Forms/NewAuth';

class AuthPage extends React.Component {
  render() {
    return (
      <div className='auth-forms'>
        <div className='auth-section'>
          <div className='auth-section_header'>
            {authLocalization[3].authHeader[this.props.language]}
          </div>
          <Auth language={this.props.language} />
        </div>
        <div className='auth-section-separator'>
          <div className='auth-section-separator_icon-wrapper'>
            <div className='auth-section-separator_icon'>
              <i className='fas fa-user'></i>
            </div>
          </div>
        </div>
        <div className='auth-section'>
          <div className='auth-section_header'>
            {authLocalization[5].registerHeader[this.props.language]}
          </div>
          <NewAuth language={this.props.language} />
        </div>
      </div>
    );
  }
}

export default AuthPage;
