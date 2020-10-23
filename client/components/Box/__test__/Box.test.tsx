import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { Box } from '../Box';

it('renders correctly', () => {
  const tree = render(<Box />).container;
  expect(tree).toMatchSnapshot();
});
