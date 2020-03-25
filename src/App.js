import React, { Component } from "react"
import axios from "axios";
import Routes from "./config/routes";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { withRouter } from 'react-router-dom';

class App extends Component {
  state = {
    currentUser: localStorage.getItem("uid")
  };

  setCurrentUser = userId => {
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
  };

  logout = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/auth/logout`, {
        withCredentials: true
      })
      .then(res => {
        console.log(res);
        this.setState({currentUser: null});
        localStorage.removeItem('uid');
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
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