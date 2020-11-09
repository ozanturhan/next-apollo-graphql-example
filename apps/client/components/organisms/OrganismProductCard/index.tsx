import styled from 'styled-components';
import React from 'react';
import { Product } from '../../../interfaces/product';
import { MoleculeLikeButton } from '../../molecules/MoleculeLikeButton';
import { AtomProductImage } from '../../atoms/AtomProductImage';
import { AtomProductTitle } from '../../atoms/AtomProductTitle';
import { AtomProductPrice } from '../../atoms/AtomProductPrice';
import { MoleculeProductDelivery } from '../../molecules/MoleculeProductDelivery';

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

export const OrganismProductCard = React.memo(
  ({ item, onToggleLike }: ProductCardProps) => {
    console.log('Render OrganismProductCard');
    return (
      <Container data-testid="product">
        <MoleculeLikeButton isLiked={item.isLiked} onToggle={onToggleLike} />
        <a href={item.image}>
          <AtomProductImage image={item.image} description={item.image} />
          <AtomProductTitle data-testid="product-title">{item.name}</AtomProductTitle>
          <AtomProductPrice>{item.price}</AtomProductPrice>
          {item.cargoType !== 'PAID' && <MoleculeProductDelivery type={item.cargoType} />}
        </a>
      </Container>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.item.isLiked === nextProps.item.isLiked;
  },
);
