import React from 'react';
import headerLocalization from '../assets/Localization/headerLocalization.json';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';

class MiniProfile extends React.Component {
  state = {
    showMenu: false,
  };

  render() {
    const { showMenu } = this.state;
    return (
      <div
        onMouseOver={() => this.setState({ showMenu: !showMenu })}
        onMouseOut={() => this.setState({ showMenu: !showMenu })}
        className='header_mini-profile'
      >
        <div className='header_mini-profile_icon'>
          <i className='far fa-user'></i>
        </div>
        <div
          style={showMenu ? { display: 'block' } : { display: 'none' }}
          className='header_mini-profile_menu'
        >
          <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>
              <button
                onClick={() => {
                  this.props.logoutUser();
                }}
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(null, { logoutUser })(MiniProfile);
