import React from 'react';
import Home, { getServerSideProps } from '../index';
import { MockedProvider } from '@apollo/client/testing';
import { PRODUCTS_QUERY } from '@queries';
import { initializeApollo } from '../../lib/apolloClient';
import { act, render } from '@testing-library/react';
import { mount } from 'enzyme';

jest.mock('../../lib/apolloClient.ts');

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

describe('Index', () => {
  it('should be rendered correctly', async () => {
    // Arrange && Act
    const tree = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>,
    ).container;

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    // Assertion
    expect(tree).toMatchSnapshot();
  });

  it('should be filtered when clicking filter button', async () => {
    // Arrange
    const wrapper = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>,
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    // Act
    wrapper.find('button').at(0).simulate('click');

    // Assertion
    expect(wrapper.find("[data-testid='product']")).toHaveLength(1);

    // Act
    wrapper.find('button').at(0).simulate('click');

    // Assertion
    expect(wrapper.find("[data-testid='product']")).toHaveLength(2);
  });

  it('should get products form server', async () => {
    // Arrange
    const query = jest.fn();

    initializeApollo.mockImplementation(() => ({
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
