import React from 'react';
import './Profile.scss';
import { connect } from 'react-redux';

class Profile extends React.Component {
  render() {
    return (
      <div className='profile'>
        <div className='profile_header'>Profile</div>
        <div className='profile-info'>
          <div className='profile-info_avatar'>
            <img
              src={this.props.currentUser.avatar}
              alt={this.props.currentUser.fullName}
            />
          </div>
          <div className='profile-info_name'>
            <span>Name:</span>
            <span>
              {this.props.currentUser.fullName
                ? this.props.currentUser.fullName
                : 'Loading'}
            </span>
          </div>
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

export default connect(mapStateToProps, {})(Profile);
