import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { ProductImage } from '../ProductImage';

it('renders correctly', () => {
  const tree = render(<ProductImage image="http://fakeurl" description="test" />).container;
  expect(tree).toMatchSnapshot();
});
