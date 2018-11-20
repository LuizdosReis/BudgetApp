import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './Header';

test('should render h1 with title', () => {
  const wrapper = shallow(<Header title="Title" />);
  expect(wrapper.find('h1').length).toBe(1);
  expect(wrapper.find('h1').text()).toBe('Title');
});

test('should render Header correctly', () => {
  const wrapper = shallow(<Header title="Title" />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
