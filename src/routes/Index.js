import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Signup from '../components/home/Signup'
import Login from '../components/home/Login'

class Routes extends Component {
  render() {
    console.log('Routes props', this.props.currentUser);
    return (
      <HashRouter>
        <Switch>
        <Route exact path="/" component={Signup} />
          <Route exact path="/login" component={Login} />
          
        </Switch>
      </HashRouter>
    );
  }
}

export default connect()(Routes);
