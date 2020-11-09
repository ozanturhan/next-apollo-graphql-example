import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { LayoutMain } from './index';

it('renders correctly', () => {
  const tree = render(<LayoutMain />).container;
  expect(tree).toMatchSnapshot();
});
