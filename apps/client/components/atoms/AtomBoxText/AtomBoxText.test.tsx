import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { AtomBoxText } from '@components';

it('renders correctly', () => {
  const tree = render(<AtomBoxText />).container;
  expect(tree).toMatchSnapshot();
});
