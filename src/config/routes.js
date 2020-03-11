import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../Components/Landing/Landing';
import Signup from '../Components/Navbar/Auth/Signup'
// import Login from '../components/Auth/Login';
//import ProfileContainer from '../Containers/ProfileContainer.js/ProfileContainer';

export default ({ currentUser, setCurrentUser }) => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/signup' component={Signup} />
    {/* <Route
      path='/login'
      render={() => (
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )} */}
    />
    {/* <Route path='/profile' component={ProfileContainer} /> */}
  </Switch>
);
