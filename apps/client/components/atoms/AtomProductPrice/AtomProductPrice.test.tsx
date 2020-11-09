import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { AtomProductPrice } from './index';

it('renders correctly', () => {
  const tree = render(<AtomProductPrice>1,234,00</AtomProductPrice>).container;
  expect(tree).toMatchSnapshot();
});
