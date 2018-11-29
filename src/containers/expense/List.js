import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getVisibleExpenses from '../../selectors/expenses';
import Header from '../../pages/Header';
import Item from './Item';
import FilterExpenses from './Filter';

export const List = ({ expenses }) => (
  <main>
    <Link to="/expenses/new">
      <button type="submit" className="pure-button pure-button-primary">
        Add Despesas
      </button>
    </Link>
    <FilterExpenses />
    {expenses.length === 0 ? (
      <p>Não há despesas</p>
    ) : (
      <div>
        <table className="pure-table table">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(expense => (
              <Item key={expense.id} {...expense} />
            ))}
          </tbody>
        </table>
      </div>
    )}
  </main>
);

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.expensesFilter),
});

export default connect(
  mapStateToProps,
  undefined,
)(List);
