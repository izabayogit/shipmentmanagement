import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      currentUser.success|| localStorage.authToken
        ? <Component {...props} />
        : <Redirect to="/login" />
    )}
  />
);
const mapStateToProps = ({authReducer}) =>{
    const {currentUser} = authReducer;
    return {currentUser}
  }
export default connect(mapStateToProps)(PrivateRoute);
