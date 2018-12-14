import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { List } from './List';
import expenses from '../../fixtures/expenses';
import { filters } from '../../fixtures/filter';

test('should render List with expenses', () => {
  const wrapper = shallow(<List expenses={expenses} filter={filters} load={() => {}} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render List with empty message', () => {
  const wrapper = shallow(<List expenses={[]} filter={filters} load={() => {}} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
