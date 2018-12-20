import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SignInPage } from './index';

let wrapper;
let startLogin;

beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(<SignInPage startLogin={startLogin} />);
});

test('should render SingIn correctly', () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should handle onClick', () => {
  wrapper.find('button').simulate('click');
  expect(startLogin).toBeCalled();
});
