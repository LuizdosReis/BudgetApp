import React from 'react';
import { connect } from 'react-redux';

import { startLogout } from '../../actions/auth';

import { Header, Title } from './styles';

export const HeaderPage = ({ startLogout }) => (
  <Header>
    <Title>Budget</Title>
    <button type="submit" onClick={startLogout}>
      Log out
    </button>
  </Header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(HeaderPage);
