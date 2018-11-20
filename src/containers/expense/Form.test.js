import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Form from './Form';
import expenses from '../../fixtures/expenses';

test('should render Form correctly', () => {
  const wrapper = shallow(<Form onSubmit={() => {}} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render Form correctly with expense', () => {
  const wrapper = shallow(<Form expense={expenses[0]} onSubmit={() => {}} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should render error for invalid form submit', () => {
  const wrapper = shallow(<Form onSubmit={() => {}} />);
  expect(toJson(wrapper)).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('descriptionError')).toEqual('adicione uma descrição');
  expect(wrapper.state('amountError')).toEqual('adicione um valor');
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should set description on input change', () => {
  const wrapper = shallow(<Form onSubmit={() => {}} />);
  const description = 'new description';
  expect(toJson(wrapper)).toMatchSnapshot();
  wrapper
    .find('input')
    .at(0)
    .simulate('change', {
      target: { value: description, name: 'description' },
    });
  expect(wrapper.state('description')).toEqual(description);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should set value on input change', () => {
  const wrapper = shallow(<Form onSubmit={() => {}} />);
  const value = 32;
  expect(toJson(wrapper)).toMatchSnapshot();
  wrapper
    .find('input')
    .at(1)
    .simulate('change', {
      target: { value, name: 'value' },
    });
  expect(wrapper.state('value')).toEqual(value);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('should call submit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();

  const expense = {
    description: expenses[0].description,
    amount: expenses[0].amount,
    createAt: expenses[0].createAt,
  };

  const wrapper = shallow(<Form onSubmit={onSubmitSpy} expense={expense} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('descriptionError')).toEqual('');
  expect(wrapper.state('amountError')).toEqual('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith(expense);
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<Form onSubmit={() => {}} />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  expect(wrapper.state('createAt')).toEqual(now);
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<Form onSubmit={() => {}} />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  expect(wrapper.state('createAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
  const focused = true;
  const wrapper = shallow(<Form onSubmit={() => {}} />);
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toEqual(focused);
});
