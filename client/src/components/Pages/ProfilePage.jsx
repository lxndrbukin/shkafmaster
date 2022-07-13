import React from 'react';
import Profile from '../Profile/Profile';

class ProfilePage extends React.Component {
  render() {
    return <Profile language={this.props.language} />;
  }
}

export default ProfilePage;
