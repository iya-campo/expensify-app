import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from '../../components/PageNotFound';

test('should render PageNotFound correct', () => {
  const wrapper = shallow(<PageNotFound />);
  expect(wrapper).toMatchSnapshot();
});
