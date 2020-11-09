import React from 'react';
import Home, { getServerSideProps } from '../pages';
import { MockedProvider } from '@apollo/client/testing';
import { PRODUCTS_QUERY } from '@queries';
import { initializeApollo } from '@lib';
import { fireEvent, render, waitFor } from '@testing-library/react';
import * as productPageActions from '@state-management/product-page/actions/product-page.actions';
import { ToggleLikeAction } from '@state-management/product-page/actions/product-page.actions';

jest.mock('../lib/apollo-client');
const mockResult = {
  data: {
    products: [
      {
        id: 1,
        image: 'http://localhost:4001/image/256/iphone_11.jpg',
        isLiked: false,
        name: 'Apple iPhone 11 128 GB Pro Cep Telefonu Apple Türkiye Garantili',
        price: 1250,
        cargoType: 'FREE',
      },
      {
        id: 2,
        image: 'http://localhost:4001/image/256/iphone_11.jpg',
        isLiked: true,
        name: 'Apple iPhone 12 128 GB Pro Cep Telefonu Apple Türkiye Garantili',
        price: 1250,
        cargoType: 'FREE',
      },
    ],
  },
};

const mocks = [
  {
    request: {
      query: PRODUCTS_QUERY,
    },
    result: mockResult,
  },
];

let IndexPage = (
  <MockedProvider mocks={mocks} addTypename={false}>
    <Home />
  </MockedProvider>
);

describe('Index', () => {
  it('should be rendered correctly', async () => {
    // Arrange && Act
    const screen = render(IndexPage);

    await waitFor(() => screen.getAllByTestId('like-button'));

    // Assertion
    expect(screen.container).toMatchSnapshot();
  });

  it('should be filtered when clicking filter button', async () => {
    // Arrange
    const screen = render(IndexPage);

    await waitFor(() => screen.getAllByTestId('like-button'));

    fireEvent(
      screen.getByTestId('filter-button'),
      new MouseEvent('click', {
        bubbles: true,
      }),
    );

    // Assertion
    expect(screen.getAllByTestId('product')).toHaveLength(1);

    // Act
    fireEvent(
      screen.getByTestId('filter-button'),
      new MouseEvent('click', {
        bubbles: true,
      }),
    );

    // Assertion
    expect(screen.getAllByTestId('product')).toHaveLength(2);
  });

  it('like status should be changed when clicking like button', async () => {
    // Arrange
    const screen = render(IndexPage);

    const spyToggleLikeAction = jest
      .spyOn(productPageActions, 'ToggleLikeAction')
      .mockImplementation((payload: number) => {
        return (class {
          constructor(payload: number) {
            console.log(payload);
          }
        } as unknown) as ToggleLikeAction;
      });

    await waitFor(() => screen.getAllByTestId('like-button'));

    fireEvent(
      screen.getAllByTestId('like-button')[0],
      new MouseEvent('click', {
        bubbles: true,
      }),
    );

    // Assertion
    expect(spyToggleLikeAction).toHaveBeenCalledWith(1);
  });

  it('should get products form server', async () => {
    // Arrange
    const query = jest.fn();

    (initializeApollo as any).mockImplementation(() => ({
      query,
      cache: {
        extract: () => mockResult,
        restore: jest.fn(),
      },
    }));

    // Act
    const response = await getServerSideProps();

    // Assertion
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          initialApolloState: mockResult,
          revalidate: 1,
        },
      }),
    );
  });
});
