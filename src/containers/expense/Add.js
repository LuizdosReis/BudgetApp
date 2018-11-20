import React from 'react';
import { connect } from 'react-redux';

import { add } from '../../actions/expenses';
import Form from './Form';
import Header from '../../pages/Header';

export class Add extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/expenses');
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
  addExpense: expense => dispatch(add(expense)),
});

export default connect(
  undefined,
  mapDispatchToProps,
)(Add);
