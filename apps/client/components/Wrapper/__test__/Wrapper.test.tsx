import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { Wrapper } from '../Wrapper';

it('renders correctly', () => {
  const tree = render(<Wrapper />).container;
  expect(tree).toMatchSnapshot();
});
