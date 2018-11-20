import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DashbordPage from './DashbordPage';

test('should render DashbordPage correctly', () => {
  const wrapper = shallow(<DashbordPage />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
