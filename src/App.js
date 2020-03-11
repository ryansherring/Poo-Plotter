import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Routes from './config/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  state = {
    //TODO set default curren user
    currentUser: localStorage.getItem('uid')
  };

  setCurrentUser = userId => {
    //TODO recieve userID and set to state
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
  };

  logout = () => {
    //TODO destroy session
    axios
      .delete(`${process.env.REACT_APP_API_URL}/auth/logout`, {withCredentials: true})
      .then(res => {
        console.log(res);
        this.setState({currentUser: null});
        this.props.history.push('/login');
        localStorage.removeItem('uid');
      })
      .catch(err => {
        console.log(err);
      })
  };

  render() {
    return (
      <>
        <Navbar currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} logout={this.logout} />
        <Routes
          currentUser={this.state.currentUser}
          setCurrentUser={this.setCurrentUser}
          logout={this.logout}
        />
      </>
    );
  }
}

export default withRouter(App);