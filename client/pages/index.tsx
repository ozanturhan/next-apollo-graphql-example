import React, {useEffect, useReducer, useState} from 'react';
import {useQuery} from '@apollo/client';
import {initializeApollo} from '../lib/apolloClient';
import {PRODUCTS_QUERY} from '@queries';
import {ButtonGroup, FilterButton, Layout, LikeCount, ProductCard, ProductCardContainer, Wrapper} from '@components';
import {Product} from '../lib/product';

const initialState: Product[] | null = null;

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return state.map((item) => (item.id === action.id ? { ...item, isLiked: !item.isLiked } : item));
    case 'fill':
      return action.products;
    default:
      return state;
  }
};

const FILTER_MAP = {
  All: () => true,
  Liked: (item) => item.isLiked,
};

function Home() {
  const { data } = useQuery(PRODUCTS_QUERY);
  const [filterType, setFilterType] = useState('All');
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'fill', products: data?.products });
  }, [data]);

  useEffect(() => {
    const likeCount = state?.filter((item) => item.isLiked)?.length;
    if (likeCount === 0 && filterType === 'Liked') {
      handleFilter(false)
    }
  }, [state]);

  const products: Product[] = state || data?.products;

  const handleFilter = (value) => {
    setFilterType(value ? 'Liked' : 'All');
  };

  const likeCount = state?.filter((item) => item.isLiked)?.length;

  return (
    <Layout>
      <Wrapper>
        <ButtonGroup>
          <LikeCount count={likeCount} />

          <FilterButton disabled={likeCount === 0} onToggle={handleFilter} isToggle={filterType === 'Liked'}>
            Beğendiklerim
          </FilterButton>
        </ButtonGroup>

        <ProductCardContainer title="İlginizi Çekebilecek Ürünler">
          {products?.filter(FILTER_MAP[filterType]).map((item) => (
            <ProductCard
              data-testid="product"
              key={item.id}
              item={item}
              onToggleLike={() => dispatch({ type: 'toggle', id: item.id })}
            />
          ))}
        </ProductCardContainer>
      </Wrapper>
    </Layout>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: PRODUCTS_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      revalidate: 1,
    },
  };
}

export default Home;
