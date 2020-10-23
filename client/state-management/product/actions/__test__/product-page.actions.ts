import {
  CHANGE_FILTER,
  ChangeFilterAction,
  FILL_PRODUCTS,
  FillProductsAction,
  TOGGLE_PRODUCT_LIKE,
  ToggleLikeAction,
} from '../product-page.actions';

describe('Product Page Reducer', () => {
  test('FillProductsAction type check', () => {
    // Arrange & Act
    const action = new FillProductsAction([]);

    // Assertion
    expect(action.type).toEqual(FILL_PRODUCTS);
  });

  test('ToggleLikeAction type check', () => {
    // Arrange & Act
    const action = new ToggleLikeAction(1);

    // Assertion
    expect(action.type).toEqual(TOGGLE_PRODUCT_LIKE);
  });

  test('ChangeFilterAction type check', () => {
    // Arrange & Act
    const action = new ChangeFilterAction('All');

    // Assertion
    expect(action.type).toEqual(CHANGE_FILTER);
  });
});
