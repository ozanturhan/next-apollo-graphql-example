import { graphql } from 'graphql';
import { mockServer } from 'graphql-tools';
import * as typeDefs from '../schema.graphql';
import schema from '../../schema';

const productList = [
  {
    id: 1,
    name: 'Iphone',
    image: 'http://fakeurl',
    price: '2,000.00 TL',
    cargoType: 'FREE',
    isLiked: false,
  },
];

const ProductListTestCase = {
  id: 'Product List Test Case',
  query: `
    query {
      products {
        id
        name
        price
        image
        cargoType
        isLiked
      }
    }
  `,
  variables: {},
  context: {
    productService: {
      getAllProducts: () => productList,
    },
  },
  expected: {
    data: {
      products: productList,
    },
  },
};

const ErrorCase = {
  ...ProductListTestCase,
  context: {
    productService: {
      getAllProducts: () => {
        throw 'request to http://localhost:3001/products failed, reason: connect ECONNREFUSED 127.0.0.1:3001';
      },
    },
  },
  expected: {
    data: {
      products: null,
    },
    errors: [
      {
        locations: [
          {
            column: 7,
            line: 3,
          },
        ],
        message:
          'Unexpected error value: "request to http://localhost:3001/products failed, reason: connect ECONNREFUSED 127.0.0.1:3001"',
        path: ['products'],
      },
    ],
  },
};

describe('Schema Test', () => {
  // Array of case types
  const cases = [ProductListTestCase, ErrorCase];

  test('has valid type definitions', async () => {
    expect(async () => {
      const MockServer = mockServer(typeDefs, {});

      await MockServer.query(`{ __schema { types { name } } }`);
    }).not.toThrow();
  });

  cases.forEach((obj) => {
    const { id, query, variables, context, expected } = obj;
    test(`query: ${id}`, async () => {
      const result = await graphql(schema, query, null, context, variables);
      return expect(result).toEqual(expected);
    });
  });
});
