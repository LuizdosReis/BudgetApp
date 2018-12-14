import uuid from 'uuid';
import database from '../firebase/firebase';

export const add = expense => ({
  type: 'ADD_EXPENSE',
  expense,
});

export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses,
});

export const startSet = () => dispatch => database
  .ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val(),
      });
    });

    dispatch(setExpenses(expenses));
  });

export const startAdd = (expenseData = {}) => (dispatch) => {
  const {
    description = '', category = null, createAt = 0, amount = 0,
  } = expenseData;

  const expense = {
    description,
    createAt,
    amount,
  };

  return database
    .ref('expenses')
    .push(expense)
    .then((ref) => {
      dispatch(
        add({
          id: ref.key,
          ...expense,
        }),
      );
    });
};

export const remove = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

export const edit = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});
