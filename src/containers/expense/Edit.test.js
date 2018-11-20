import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Edit } from './Edit';
import expenses from '../../fixtures/expenses';

let editExpenseSpy;
let removeExpenseSpy;
let historySpy;
let wrapper;

beforeEach(() => {
  editExpenseSpy = jest.fn();
  removeExpenseSpy = jest.fn();
  historySpy = { push: jest.fn() };
  // eslint-disable-next-line prefer-destructuring
  wrapper = shallow(
    <Edit
      editExpense={editExpenseSpy}
      removeExpense={removeExpenseSpy}
      history={historySpy}
      expense={expenses[2]}
    />,
  );
});

test('should render Edit correctly', () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should handle submit', () => {
  wrapper.find('Form').prop('onSubmit')(expenses[2]);
  expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
  expect(historySpy.push).toHaveBeenLastCalledWith('/expenses');
});

test('should handle remove', () => {
  const { id } = expenses[2];
  wrapper.find('button').simulate('click');
  expect(removeExpenseSpy).toHaveBeenLastCalledWith({ id });
  expect(historySpy.push).toHaveBeenLastCalledWith('/expenses');
});
