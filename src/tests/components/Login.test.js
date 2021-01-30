import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components/Login';

let startLogin;

beforeEach(() => {
  startLogin = jest.fn();
});

test('should render Login page correctly', () => {
  const wrapper = shallow(<Login startLogin={startLogin} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const wrapper = shallow(<Login startLogin={startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});
