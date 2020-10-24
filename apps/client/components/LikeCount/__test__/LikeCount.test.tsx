import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { LikeCount } from '../LikeCount';

it('renders correctly', () => {
  const tree = render(<LikeCount />).container;
  expect(tree).toMatchSnapshot();
});
