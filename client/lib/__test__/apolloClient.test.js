import { renderHook } from '@testing-library/react-hooks';
import { ApolloClient } from '@apollo/client';
import { initializeApollo, useApollo } from '../apolloClient';

jest.mock('@apollo/client');

describe('Apollo Client', () => {
  const extract = jest.fn();
  const restore = jest.fn();

  beforeEach(() => {
    ApolloClient.mockImplementation((client) => ({ ...client, extract: extract, cache: { restore: restore } }));
  });

  afterEach(() => {
    extract.mockClear();
    restore.mockClear();
    ApolloClient.mockClear();
  });

  it('should be created', () => {
    const apolloClient = initializeApollo();

    expect(apolloClient.uri).toEqual('http://localhost:4000/graphql');
    expect(apolloClient.ssrMode).toEqual(false);
  });

  it('without initial state', () => {
    const { result } = renderHook(() => useApollo(null));
    expect(result.current.uri).toBe('http://localhost:4000/graphql');
  });

  it('with initial state', () => {
    const { result } = renderHook(() => useApollo({ state: 'Mock State' }));

    expect(result.current.uri).toEqual('http://localhost:4000/graphql');
    expect(extract).toHaveBeenCalled();
    expect(restore).toHaveBeenCalledWith({ state: 'Mock State' });
  });
});
