import React from 'react';
import MyApp from '../pages/_app';
import { render } from '@testing-library/react';
import * as apolloClient from '../lib/apollo-client';
import { ApolloConsumer } from '@apollo/client';

describe('App', () => {
  test('Application should be rendered correctly', () => {
    // Arrange
    jest.spyOn(apolloClient, 'useApollo').mockImplementation(() => ({}));

    const WithApolloClient = () => (
      <ApolloConsumer>
        {(client) => {
          return 'We have access to the client!';
        }}
      </ApolloConsumer>
    );

    // Act
    const tree = render(MyApp({ Component: WithApolloClient, pageProps: { initialApolloState: null } }));

    // Assertion
    expect(tree).toBeTruthy();
    expect(tree.getAllByText('We have access to the client!')).toBeTruthy();
  });
});
