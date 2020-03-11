import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../Components/Landing/Landing";
import Login from "../Components/Navbar/Auth/Login";
import ProfileContainer from "../Containers/ProfileContainer";
import Home from '../Components/Home/Home'
import Register from '../Components/Navbar/Auth/Signup'
// import Register from "../Components/Navbar/Auth/Signup"


export default ({ currentUser, setCurrentUser }) => (
  <Switch>
    <Route exact path="/" component={currentUser ? Home : Landing} />
    {/* <Route exact path="/cities" component={CitiesView} /> */}
    <Route
      path="/login"
      render={() => (
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    />
    <Route exact path='/' component={Home} />
    <Route path='/register' component={Register} />
    {/* <Route exact path="/postcontainer" component={PostContainer} /> */}
    <Route path="/profile" component={ProfileContainer} />
    {/* <Route path="/posts/:id" component={PostDetail} /> */}
  </Switch>
);