import styled from 'styled-components';
import React from 'react';
import { LikeButton } from '../LikeButton/LikeButton';
import { ProductDelivery } from '../ProductDelivery/ProductDelivery';
import { ProductImage } from '../ProductImage/ProductImage';
import { ProductPrice } from '../ProductPrice/ProductPrice';
import { ProductTitle } from '../ProductTitle/ProductTitle';
import { Product } from '../../interfaces/product';

export interface ProductCardProps {
  item: Product;
  onToggleLike?: (isLike: boolean) => void;
}

export const Container = styled.div`
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  padding: 15px;
  position: relative;

  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;
    font-size: 1rem;
  }
`;

export const ProductCard = ({ item, onToggleLike }: ProductCardProps) => {
  return (
    <Container>
      <LikeButton isLiked={item.isLiked} onToggle={onToggleLike} />
      <a href={item.image}>
        <ProductImage image={item.image} description={item.image} />
        <ProductTitle data-testid="product-title">{item.name}</ProductTitle>
        <ProductPrice>{item.price}</ProductPrice>
        {item.cargoType !== 'PAID' && <ProductDelivery type={item.cargoType} />}
      </a>
    </Container>
  );
};
