import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { AtomIconLike } from './index';

it('renders correctly', () => {
  const tree = render(<AtomIconLike />).container;
  expect(tree).toMatchSnapshot();
});
