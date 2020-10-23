import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { initializeApollo } from '../lib/apollo-client';
import { PRODUCTS_QUERY } from '@queries';
import { ButtonGroup, FilterButton, Layout, LikeCount, ProductCard, ProductCardContainer, Wrapper } from '@components';
import { Product } from '../interfaces/product';
import { useProductReducer } from '../state-management/product/reducers/product-page.reducer';
import {
  ChangeFilterAction,
  FillProductsAction,
  ToggleLikeAction,
} from '../state-management/product/actions/product-page.actions';

const FILTER_MAP = {
  All: () => true,
  Liked: (item) => item.isLiked,
};

function Home() {
  const { data } = useQuery(PRODUCTS_QUERY);
  const { products, filter, dispatch } = useProductReducer();

  useEffect(() => {
    dispatch(new FillProductsAction(data?.products));
  }, [data]);

  useEffect(() => {
    const likeCount = products?.filter((item) => item.isLiked)?.length;
    if (likeCount === 0 && filter === 'Liked') {
      handleFilter(false);
    }
  }, [products]);

  const handleFilter = (value) => {
    dispatch(new ChangeFilterAction(value ? 'Liked' : 'All'));
  };

  const productList: Product[] = products || data?.products;
  const likeCount = productList?.filter((item) => item.isLiked)?.length;

  return (
    <Layout>
      <Wrapper>
        <ButtonGroup>
          <LikeCount count={likeCount} />

          <FilterButton disabled={likeCount === 0} onToggle={handleFilter} isToggle={filter === 'Liked'}>
            Beğendiklerim
          </FilterButton>
        </ButtonGroup>

        <ProductCardContainer title="İlginizi Çekebilecek Ürünler">
          {productList?.filter(FILTER_MAP[filter]).map((item) => (
            <ProductCard
              data-testid="product"
              key={item.id}
              item={item}
              onToggleLike={() => dispatch(new ToggleLikeAction(item.id))}
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
