import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

export const Container = styled.span`
  text-align: center;
  margin-bottom: 15px;

  img {
    max-width: 100%;
  }
`;

export const AtomProductImage = ({ image, description }) => {
  return (
    <Container>
      <img src={image} alt={description} />
    </Container>
  );
};

AtomProductImage.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
