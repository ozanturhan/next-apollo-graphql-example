import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { AtomProductImage } from './index';

it('renders correctly', () => {
  const tree = render(<AtomProductImage image="http://fakeurl" description="test" />).container;
  expect(tree).toMatchSnapshot();
});
