import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { AtomBox } from './index';

it('renders correctly', () => {
  const tree = render(<AtomBox />).container;
  expect(tree).toMatchSnapshot();
});
