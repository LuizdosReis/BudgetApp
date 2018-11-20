import uuid from 'uuid';

export const add = ({
  description = '', category = null, createAt = 0, amount = 0,
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    category,
    createAt,
    amount,
  },
});

export const remove = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

export const edit = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});
