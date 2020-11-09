import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { AtomProductTitle } from './index';

it('renders correctly', () => {
  const tree = render(<AtomProductTitle>Hello Product</AtomProductTitle>).container;
  expect(tree).toMatchSnapshot();
});
