import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { LayoutWrapper } from './index';

it('renders correctly', () => {
  const tree = render(<LayoutWrapper />).container;
  expect(tree).toMatchSnapshot();
});
