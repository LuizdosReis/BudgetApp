import moment from 'moment';
import selectExpenses from './expenses';
import expenses from '../fixtures/expenses';

test('should find one expense when creatAt is within startDate and endDate', () => {
  const filters = {
    startDate: moment(0),
    endDate: moment(0),
  };
  const expensesSelected = selectExpenses(expenses, filters);

  expect(expensesSelected).toEqual([expenses[0]]);
});

test('not should find expense when creatAts is not within startDate and endDate', () => {
  const filters = {
    startDate: moment(0).add(2, 'day'),
    endDate: moment(0).add(2, 'day'),
  };
  const expensesSelected = selectExpenses(expenses, filters);

  expect(expensesSelected).toEqual([]);
});

test('should find all expenses when startDate and endDate are not provider', () => {
  const filters = {};
  const expensesSelected = selectExpenses(expenses, filters);

  expect(expensesSelected).toEqual([expenses[1], expenses[0], expenses[2]]);
});

test('should find expenses filtering by description when description filter is provider', () => {
  const filters = {
    description: 'C',
  };
  const expensesSelected = selectExpenses(expenses, filters);

  expect(expensesSelected).toEqual([expenses[2]]);
});
