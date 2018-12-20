import React from 'react';
import { shallow } from 'enzyme';
import { HeaderPage } from './index';

let startLogout;
let wrapper;

beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<HeaderPage startLogout={startLogout} />);
});

test('should render Header correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onClick', () => {
  wrapper.find('button').simulate('click');
  expect(startLogout).toBeCalled();
});
