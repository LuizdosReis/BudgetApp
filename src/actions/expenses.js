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
  const { description = '', createAt = 0, amount = 0 } = expenseData;

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

export const startRemove = ({ id } = {}) => dispatch => database
  .ref(`expenses/${id}`)
  .remove()
  .then(() => {
    dispatch(remove({ id }));
  });

export const edit = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

export const startEdit = (id, updates) => dispatch => database
  .ref(`expenses/${id}`)
  .update(updates)
  .then(() => {
    dispatch(edit(id, updates));
  });
