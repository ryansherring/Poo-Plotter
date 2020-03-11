import React, { Component } from 'react';
import Profile from '../../components/Profile/Profile';
import axios from 'axios';

class ProfileContainer extends Component {
  state = {
    profile: {}
  };

  componentDidMount() {
    //TODO recieve user data from db
    const userId = localStorage.getItem('uid');
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {withCredentials: true})
      .then(res => {
        this.setState({
          profile: res.data.data
        })
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  render() {
    return <Profile profile={this.state.profile} />;
  }
}

export default ProfileContainer;
