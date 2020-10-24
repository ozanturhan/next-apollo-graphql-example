import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { ProductCard } from '../ProductCard';

describe('Product Card', () => {
  it('should be render correctly', () => {
    const product = {
      id: 1,
      image: 'http://localhost:4001/image/256/iphone_11.jpg',
      isLiked: false,
      name: 'Apple iPhone 11 128 GB Pro Cep Telefonu Apple Türkiye Garantili',
      price: '1,250.00 TL',
      cargoType: 'FREE',
    };

    const tree = render(<ProductCard item={product} />).container;
    expect(tree).toMatchSnapshot();
  });
});
