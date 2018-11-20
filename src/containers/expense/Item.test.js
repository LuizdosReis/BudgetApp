import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Item from './Item';
import expenses from '../../fixtures/expenses';

test('should render Item with expense', () => {
  const wrapper = shallow(<Item {...expenses[0]} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
