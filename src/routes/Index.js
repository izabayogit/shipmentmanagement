import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Signup, Login} from '../components/home'
import {Dashboard} from '../components/container';
import PrivateRoute from './PrivateRoute';

class Routes extends Component {
  render() {
    // console.log('Routes props', this.props.currentUser);
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Signup} />
          <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
