import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Add } from './Add';
import expenses from '../../fixtures/expenses';

let addExpenseSpy;
let historySpy;
let wrapper;

beforeEach(() => {
  addExpenseSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(<Add addExpense={addExpenseSpy} history={historySpy} />);
});

test('should render Add correctly', () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should handle submit', () => {
  wrapper.find('Form').prop('onSubmit')(expenses[0]);
  expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[0]);
  expect(historySpy.push).toHaveBeenLastCalledWith('/expenses');
});
