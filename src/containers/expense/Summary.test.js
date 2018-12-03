import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Summary } from './Summary';

test('should correctly render summary with one expense', () => {
  const wrapper = shallow(<Summary count={1} total={235} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should correctly render summary with  expense', () => {
  const wrapper = shallow(<Summary count={23} total={2353493029} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
