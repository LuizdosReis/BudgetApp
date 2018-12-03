import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../../selectors/expenses';
import getTotalExpenses from '../../selectors/expensesTotal';

export const Summary = ({ count, total }) => {
  const expenseWord = count === 1 ? 'despesa' : 'despesas';
  return (
    <div>
      <h1>
        {count}
        {' '}
        {expenseWord}
        {' '}
| total
        {' '}
        {numeral(total / 100).format('$0,0.00')}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const expenses = getVisibleExpenses(state.expenses, state.expensesFilter);
  return {
    count: expenses.length,
    total: getTotalExpenses(expenses),
  };
};

export default connect(
  mapStateToProps,
  undefined,
)(Summary);
