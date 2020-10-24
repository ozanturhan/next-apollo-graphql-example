import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { ProductCardContainer } from '../ProductCardContainer';
import { ProductCard } from '@components';

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
    <ProductCardContainer title="Test">
      <ProductCard item={product} />
    </ProductCardContainer>,
  ).container;

  expect(tree).toMatchSnapshot();
});
