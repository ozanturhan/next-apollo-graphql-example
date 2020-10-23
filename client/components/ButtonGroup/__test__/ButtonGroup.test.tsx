import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { ButtonGroup } from '../ButtonGroup';

it('renders correctly', () => {
  const tree = render(<ButtonGroup />).container;
  expect(tree).toMatchSnapshot();
});
