import styled from 'styled-components';
import DeliveryIcon from '../../public/fast-delivery.svg';
import React from 'react';

const ProductDeliveryContainer = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: #898989;
  display: flex;
  align-items: center;
`;

const Icon = styled(DeliveryIcon)`
  height: 18px;
  width: 18px;
  margin: 0 10px;
`;

const CARGO_TYPE = {
  FREE: 'Ücretsiz',
  FREE_SAME_DAY: 'Ücretsiz - Aynı Gün Kargo',
};

export const ProductDelivery = ({ type }) => {
  return (
    <ProductDeliveryContainer>
      <Icon /> {CARGO_TYPE[type]}
    </ProductDeliveryContainer>
  );
};
