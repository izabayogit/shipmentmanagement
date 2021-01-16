import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Signup, Login} from '../components/home'
import {Dashboard} from '../components/container';
import PrivateRoute from './PrivateRoute';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Signup} />
          <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
