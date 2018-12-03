import expensesTotal from './expensesTotal';
import expenses from '../fixtures/expenses';

test('should return sum all expenses', () => {
  const res = expensesTotal(expenses);

  expect(res).toBe(9750);
});

test('should return zero if no expenses', () => {
  const res = expensesTotal([expenses[0]]);

  expect(res).toBe(3250);
});

test('should return zero if no expenses', () => {
  const res = expensesTotal([]);

  expect(res).toBe(0);
});
