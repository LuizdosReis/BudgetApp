import moment from 'moment';
import expensesFilterReducer from './expensesFilter';

test('should setup default filter values', () => {
  const state = expensesFilterReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({
    description: '',
    sortBy: 'id',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should set description filter', () => {
  const description = 'my filter';

  const action = {
    type: 'SET_DESCRIPTION_FILTER',
    description,
  };

  const state = expensesFilterReducer(undefined, action);

  expect(state.description).toEqual(description);
});

test('should set dates filter', () => {
  const startDate = moment(0);
  const endDate = moment(0).add(1, 'day');

  const action = {
    type: 'FILTER_BY_DATES',
    startDate,
    endDate,
  };

  const state = expensesFilterReducer(undefined, action);

  expect(state.startDate).toEqual(startDate);
  expect(state.endDate).toEqual(endDate);
});

test('should set sortBy description', () => {
  const currentState = {
    description: '',
    sortBy: 'id',
    startDate: undefined,
    endDate: undefined,
  };

  const action = { type: 'SORT_BY_DESCRIPTION' };

  const state = expensesFilterReducer(currentState, action);

  expect(state.sortBy).toEqual('description');
});

test('should set sortBy id', () => {
  const currentState = {
    description: '',
    sortBy: 'description',
    startDate: undefined,
    endDate: undefined,
  };

  const action = { type: 'SORT_BY_ID' };

  const state = expensesFilterReducer(currentState, action);

  expect(state.sortBy).toEqual('id');
});

test('should set sortBy createAt', () => {
  const currentState = {
    desscription: '',
    sortBy: 'id',
    startDate: undefined,
    endDate: undefined,
  };

  const action = { type: 'SORT_BY_CREATEAT' };

  const state = expensesFilterReducer(currentState, action);

  expect(state.sortBy).toEqual('createAt');
});

test('should set sortBy amount', () => {
  const currentState = {
    desscription: '',
    sortBy: 'id',
    startDate: undefined,
    endDate: undefined,
  };

  const action = { type: 'SORT_BY_AMOUNT' };

  const state = expensesFilterReducer(currentState, action);

  expect(state.sortBy).toEqual('amount');
});
