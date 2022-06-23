import React from 'react';
import headerLocalization from '../assets/Localization/headerLocalization.json';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';

class MiniProfile extends React.Component {
  state = {
    showMenu: false,
  };

  displayAvatar() {
    if (this.props.currentUser.avatar) {
      return (
        <div
          className='header_mini-profile_icon'
          style={{ backgroundImage: `url(${this.props.currentUser.avatar})` }}
        ></div>
      );
    } else {
      return (
        <div className='header_mini-profile_icon'>
          <i className='far fa-user'></i>
        </div>
      );
    }
  }

  render() {
    const { showMenu } = this.state;
    return (
      <div
        onMouseOver={() => this.setState({ showMenu: !showMenu })}
        onMouseOut={() => this.setState({ showMenu: !showMenu })}
        className='header_mini-profile'
      >
        {this.displayAvatar()}
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, { logoutUser })(MiniProfile);
