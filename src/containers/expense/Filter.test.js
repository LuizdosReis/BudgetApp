import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import moment from 'moment';
import { filters, altFilters } from '../../fixtures/filter';
import { Filter } from './Filter';

let datesToFilter;
let descriptionToFilter;
let sortByCreateAt;
let sortByAmount;
let sortByDescription;
let wrapper;

beforeEach(() => {
  datesToFilter = jest.fn();
  descriptionToFilter = jest.fn();
  sortByCreateAt = jest.fn();
  sortByAmount = jest.fn();
  sortByDescription = jest.fn();
  wrapper = shallow(
    <Filter
      filter={filters}
      datesToFilter={datesToFilter}
      descriptionToFilter={descriptionToFilter}
      sortByCreateAt={sortByCreateAt}
      sortByAmount={sortByAmount}
      sortByDescription={sortByDescription}
    />,
  );
});

test('should render Filter correctly', () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render Filter with alt data correctly', () => {
  wrapper.setProps({
    filter: altFilters,
  });
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'text';
  wrapper.find('input').simulate('change', {
    target: {
      value,
    },
  });
  expect(descriptionToFilter).toHaveBeenLastCalledWith({ description: value });
});

test('should handle select change to createAt', () => {
  const value = 'createAt';
  wrapper.find('select').simulate('change', {
    target: {
      value,
    },
  });
  expect(sortByCreateAt).toHaveBeenCalled();
});

test('should handle select change to amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: {
      value,
    },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle select change to description', () => {
  const value = 'description';
  wrapper.find('select').simulate('change', {
    target: {
      value,
    },
  });
  expect(sortByDescription).toHaveBeenCalled();
});

test('should handle date change', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });
  expect(datesToFilter).toHaveBeenLastCalledWith({ startDate, endDate });
});

test('should handle date focus change', () => {
  const calendarFocused = 'endDate';
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
