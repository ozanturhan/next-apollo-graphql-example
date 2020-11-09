import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { MoleculeProductDelivery } from './index';

it('renders correctly', () => {
  const tree = render(<MoleculeProductDelivery type="FREE" />).container;
  expect(tree).toMatchSnapshot();
});
