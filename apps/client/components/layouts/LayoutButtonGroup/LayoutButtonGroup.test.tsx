import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { LayoutButtonGroup } from './index';

it('renders correctly', () => {
  const tree = render(<LayoutButtonGroup />).container;
  expect(tree).toMatchSnapshot();
});
