import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { AtomIconDelivery } from './index';

it('renders correctly', () => {
  const tree = render(<AtomIconDelivery />).container;
  expect(tree).toMatchSnapshot();
});
