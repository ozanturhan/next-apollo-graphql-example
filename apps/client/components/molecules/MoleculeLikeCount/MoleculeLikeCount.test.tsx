import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { MoleculeLikeCount } from './index';

it('renders correctly', () => {
  const tree = render(<MoleculeLikeCount />).container;
  expect(tree).toMatchSnapshot();
});
