import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { LayoutProductCard } from './index';
import { OrganismProductCard } from '../../organisms';

it('renders correctly', () => {
  const product = {
    id: 1,
    image: 'http://localhost:4001/image/256/iphone_11.jpg',
    isLiked: false,
    name: 'Apple iPhone 11 128 GB Pro Cep Telefonu Apple Türkiye Garantili',
    price: '1,250.00 TL',
    cargoType: 'FREE',
  };
  const tree = render(
    <LayoutProductCard title="Test">
      <OrganismProductCard item={product} />
    </LayoutProductCard>,
  ).container;

  expect(tree).toMatchSnapshot();
});
