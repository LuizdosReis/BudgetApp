import React from 'react';
import { connect } from 'react-redux';

import { startAdd } from '../../actions/expenses';
import Form from './Form';
import Header from '../../pages/Header';

export class Add extends React.Component {
  onSubmit = (expense) => {
    const { history, add } = this.props;

    add(expense);

    history.push('/expenses');
  };

  render() {
    return (
      <div id="layout">
        <Header title="Adicione uma despesa" />
        <main className="content">
          <Form onSubmit={this.onSubmit} />
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: expense => dispatch(startAdd(expense)),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(Add);
