import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { edit, remove } from '../../actions/expenses';
import Form from './Form';
import Header from '../../pages/Header';

export class Edit extends React.Component {
  onSubmit = (expense) => {
    const { editExpense, history } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    editExpense(this.props.expense.id, expense);
    history.push('/expenses');
  };

  onRemove = () => {
    const { removeExpense, history, expense } = this.props;
    removeExpense({ id: expense.id });
    history.push('/expenses');
  };

  render() {
    const { expense } = this.props;
    return (
      <div id="layout">
        <Header title="Altere há despesa" />
        <main className="content">
          <Form expense={expense} onSubmit={this.onSubmit} />
          <button type="submit" onClick={this.onRemove}>
            Remover
          </button>
        </main>
      </div>
    );
  }
}

Edit.propTypes = {
  expense: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  editExpense: PropTypes.func.isRequired,
  removeExpense: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  editExpense: (id, expense) => dispatch(edit(id, expense)),
  removeExpense: data => dispatch(remove(data)),
});

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Edit);
