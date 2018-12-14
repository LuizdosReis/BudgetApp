import expenseReducer from './expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expenseReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

test('should set expenses', () => {
  const expense = expenses[1];

  const action = {
    type: 'SET_EXPENSES',
    expenses: [expense],
  };

  const state = expenseReducer(expenses, action);

  expect(state).toEqual([expense]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[0].id,
  };

  const state = expenseReducer(expenses, action);

  expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1,
  };

  const state = expenseReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const expense = {
    id: 1,
    description: 'Gum',
    category: 'Life',
    createAt: 0,
    amount: 32.5,
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense,
  };

  const state = expenseReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
});

test('should edit expense', () => {
  const amount = 33.5;

  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount,
    },
  };

  const state = expenseReducer(expenses, action);

  expect(state[1].amount).toBe(amount);
});

test('should not edit expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      description: 'Gum update',
    },
  };

  const state = expenseReducer(expenses, action);

  expect(state).toEqual(expenses);
});
