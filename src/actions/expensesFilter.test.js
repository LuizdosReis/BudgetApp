import moment from 'moment';
import {
  setDatesToFilter,
  setDescriptionToFilter,
  setSortByDescription,
  setSortByCreateAt,
  setSortByAmount,
} from './expensesFilter';

test('should setup datesToFilter action object', () => {
  const action = setDatesToFilter({ startDate: moment(0), endDate: moment(2) });

  expect(action).toEqual({
    type: 'FILTER_BY_DATES',
    startDate: moment(0),
    endDate: moment(2),
  });
});

test('should setup setDescriptionToFilter action object', () => {
  const description = 'description to filter';
  const action = setDescriptionToFilter({ description });

  expect(action).toEqual({
    type: 'SET_DESCRIPTION_FILTER',
    description,
  });
});

test('should setup setSortByDescription action object', () => {
  const action = setSortByDescription();

  expect(action).toEqual({
    type: 'SORT_BY_DESCRIPTION',
  });
});

test('should setup setSortByCreateAt action object', () => {
  const action = setSortByCreateAt();

  expect(action).toEqual({
    type: 'SORT_BY_CREATEAT',
  });
});

test('should setup setSortByAmount action object', () => {
  const action = setSortByAmount();

  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
});
