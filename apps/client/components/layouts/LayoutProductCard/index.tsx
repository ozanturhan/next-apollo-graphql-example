import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px 10px 2px 2px;
  border-left: 1px solid #c6c5c5;
  border-right: 1px solid #c6c5c5;

  h2 {
    color: #404040;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-top: 20px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: auto auto auto;
  }

  @media only screen and (max-width: 860px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`;

export const LayoutProductCard = ({ children, title }) => {
  return (
    <Container>
      <h2>{title}</h2>

      <GridContainer>{children}</GridContainer>
    </Container>
  );
};
