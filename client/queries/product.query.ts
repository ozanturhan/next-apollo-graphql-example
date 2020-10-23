import { gql } from '@apollo/client';

export const PRODUCTS_QUERY = gql`
  query {
    products {
      id
      name
      price
      image
      isLiked
      cargoType
    }
  }
`;
