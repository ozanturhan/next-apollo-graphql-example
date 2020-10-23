import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { Layout } from '../Layout';

it('renders correctly', () => {
  const tree = render(<Layout />).container;
  expect(tree).toMatchSnapshot();
});
