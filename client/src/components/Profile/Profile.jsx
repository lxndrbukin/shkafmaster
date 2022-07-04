import React from 'react';
import './Profile.scss';
import { connect } from 'react-redux';

class Profile extends React.Component {
  addName() {
    return <button>Add Name</button>;
  }

  addEmail() {
    return <button>Add Email</button>;
  }

  render() {
    return (
      <div className='profile-wrapper'>
        <div className='profile_header'>Profile</div>
        <div className='profile'>
          <div className='profile-info'>
            <div className='profile-info_avatar'>
              <img
                src={this.props.currentUser.avatar}
                alt={this.props.currentUser.fullName}
              />
            </div>
            <div className='profile-info_lines'>
              <div className='profile-info_line'>
                <span className='profile-info_line-subject'>Name: </span>
                <span className='profile-info_line-info'>
                  {this.props.currentUser.fullName
                    ? this.props.currentUser.fullName
                    : this.addName()}
                </span>
              </div>
              <div className='profile-info_line'>
                <span className='profile-info_line-subject'>Email: </span>
                <span className='profile-info_line-info'>
                  {this.props.currentUser.email
                    ? this.props.currentUser.email
                    : this.addEmail()}
                </span>
              </div>
              <div className='profile-info_line'>
                <span className='profile-info_line-subject'>Orders: </span>
                <span className='profile-info_line-info'>
                  {this.props.currentUser.orders
                    ? this.props.currentUser.orders
                    : 'No orders'}
                </span>
              </div>
            </div>
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
