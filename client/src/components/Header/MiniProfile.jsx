import React from 'react';

class MiniProfile extends React.Component {
  render() {
    return (
      <div className='header_mini-profile'>
        <div className='header_mini-profile_icon'>
          <i className='far fa-user'></i>
        </div>
        <div className='header_mini-profile_menu'>
          <ul>
            <li>About me</li>
            <li>Settings</li>
            <li>Log out</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MiniProfile;
