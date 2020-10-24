import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { ProductTitle } from '../ProductTitle';

it('renders correctly', () => {
  const tree = render(<ProductTitle>Hello Product</ProductTitle>).container;
  expect(tree).toMatchSnapshot();
});
