import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { ProductDelivery } from '../ProductDelivery';

it('renders correctly', () => {
  const tree = render(<ProductDelivery />).container;
  expect(tree).toMatchSnapshot();
});
