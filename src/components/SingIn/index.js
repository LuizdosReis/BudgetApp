import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';

export const SignInPage = ({ startLogin }) => (
  <main className="content">
    <button className="pure-button" type="submit" onClick={startLogin}>
      Entrar
    </button>
  </main>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(SignInPage);
