// react-test-renderer

import React from 'react';
import { shallow } from 'enzyme';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { Header } from '../../components/Header';

let startLogout;

beforeEach(() => {
  startLogout = jest.fn();
});

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={startLogout} />);
  expect(wrapper).toMatchSnapshot();

  // find example
  //   expect(wrapper.find('h1').text()).toBe('Expensify');

  //   const renderer = new ReactShallowRenderer();
  //   renderer.render(<Header />);
  //   expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
