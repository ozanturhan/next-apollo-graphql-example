import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { ProductPrice } from '../ProductPrice';

it('renders correctly', () => {
  const tree = render(<ProductPrice>1,234,00</ProductPrice>).container;
  expect(tree).toMatchSnapshot();
});
