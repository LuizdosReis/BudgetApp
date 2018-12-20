import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import Menu from '../components/Menu';
import Header from '../components/Header';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated ? (
      <Fragment>
        <Header />
        <Menu />
        <Component {...props} />
      </Fragment>
    ) : (
      <Redirect to="/" />
    ))
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);
