import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from '../components/home/Signup'
import Login from '../components/home/Login'

class Routes extends Component {
  render() {
    console.log('Routes props', this.props.currentUser);
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Signup} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect()(Routes);
