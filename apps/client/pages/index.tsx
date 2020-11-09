import React from 'react';
import {
  LayoutButtonGroup,
  LayoutMain,
  LayoutProductCard,
  LayoutWrapper,
  MoleculeFilterButton,
  MoleculeLikeCount,
  OrganismProductCard,
} from '@components';
import { ToggleLikeAction, useProductPageReducer } from '@state-management/product-page';
import { PRODUCTS_QUERY } from '@queries';
import { initializeApollo } from '@lib';
import Head from 'next/head';

function Home() {
  const { products, filter, likeCount, handleFilter, dispatch } = useProductPageReducer();

  return (
    <div>
      <Head>
        <title>Challenge</title>
        <meta name="Description" content="Challenge page." />
      </Head>
      <LayoutMain>
        <LayoutWrapper>
          <LayoutButtonGroup>
            <MoleculeLikeCount count={likeCount} />

            <MoleculeFilterButton disabled={likeCount === 0} onToggle={handleFilter} isToggle={filter === 'Liked'}>
              Beğendiklerim
            </MoleculeFilterButton>
          </LayoutButtonGroup>

          <LayoutProductCard title="İlginizi Çekebilecek Ürünler">
            {products?.map((item) => (
              <OrganismProductCard
                key={item.id}
                item={item}
                onToggleLike={() => dispatch(new ToggleLikeAction(item.id))}
              />
            ))}
          </LayoutProductCard>
        </LayoutWrapper>
      </LayoutMain>
    </div>
  );
}

export const getServerSideProps = async () => {
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
};

export default Home;
