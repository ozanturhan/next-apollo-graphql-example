import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { BoxText } from '../BoxText';

it('renders correctly', () => {
  const tree = render(<BoxText />).container;
  expect(tree).toMatchSnapshot();
});
