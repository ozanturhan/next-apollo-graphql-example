import styled from 'styled-components';
import React from 'react';
import { AtomIconDelivery } from '../../atoms/AtomIconDelivery';

const ProductDeliveryContainer = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: #898989;
  display: flex;
  align-items: center;
`;

const CARGO_TYPE = {
  FREE: 'Ücretsiz',
  FREE_SAME_DAY: 'Ücretsiz - Aynı Gün Kargo',
};

export const MoleculeProductDelivery = ({ type }) => {
  return (
    <ProductDeliveryContainer>
      <AtomIconDelivery /> {CARGO_TYPE[type]}
    </ProductDeliveryContainer>
  );
};
