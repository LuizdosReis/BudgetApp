import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  remove, edit, add, startAdd,
} from './expenses';

import expenses from '../fixtures/expenses';
import database from '../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

it('should setup remove expense action object', () => {
  const action = remove({ id: 1 });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 1,
  });
});

it('should setup edit expense action object', () => {
  const action = edit(1, { description: 'updated description' });

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 1,
    updates: {
      description: 'updated description',
    },
  });
});

it('should setup add expense action object with provided values', () => {
  const expense = expenses[0];
  const action = add(expense);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense,
  });
});

it('should add expense to database and store', (done) => {
  const store = createMockStore();

  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    createAt: 1000,
  };

  store
    .dispatch(startAdd(expenseData))
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

it('should add expense with defaults to database and store', (done) => {
  const store = createMockStore();

  const expenseDefaults = {
    description: '',
    createAt: 0,
    amount: 0,
  };

  store
    .dispatch(startAdd({}))
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults,
        },
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});
