import { ProductPageReducer, useProductReducer } from '../product-page.reducer';
import { Product } from '../../../../interfaces/product';
import { ChangeFilterAction, FillProductsAction, ToggleLikeAction } from '../../actions/product-page.actions';
import { act, renderHook } from '@testing-library/react-hooks';
import { ProductPageState } from '../../states/product-page.state';

describe('Product Page Reducer', () => {
  test('should be filter return default state', () => {
    // Arrange

    const state = (ProductPageReducer as any)(ProductPageState.STATE, { type: undefined });
    // Assertion
    expect(state.products).toEqual(ProductPageState.STATE.products);
    expect(state.filter).toEqual(ProductPageState.STATE.filter);
  });

  test('should be products filled', () => {
    // Arrange
    const { result } = renderHook(() => useProductReducer());

    const { dispatch } = result.current;

    const product: Product = {
      id: 1,
      image: 'image',
      name: 'name',
      isLiked: false,
      cargoType: 'FREE',
      price: '1 TL',
    };

    // Act
    act(() => {
      dispatch(new FillProductsAction([product]));
    });

    // Assertion
    expect(result.current.products).toEqual([product]);
  });

  test('should be filter changed', () => {
    // Arrange
    const { result } = renderHook(() => useProductReducer());
    const { dispatch } = result.current;

    // Act
    act(() => {
      dispatch(new ChangeFilterAction('Liked'));
    });

    // Assertion
    expect(result.current.filter).toEqual('Liked');
  });

  test('should be like property changed', () => {
    // Arrange
    const { result } = renderHook(() => useProductReducer());
    const { dispatch } = result.current;

    const products: Product[] = [
      {
        id: 1,
        image: 'image',
        name: 'name',
        isLiked: false,
        cargoType: 'FREE',
        price: '1 TL',
      },
      {
        id: 2,
        image: 'image',
        name: 'name',
        isLiked: false,
        cargoType: 'FREE',
        price: '1 TL',
      },
    ];

    act(() => {
      dispatch(new FillProductsAction(products));
    });

    // Act
    act(() => {
      dispatch(new ToggleLikeAction(products[0].id));
    });

    // Assertion
    expect(result.current.products[0].isLiked).toBeTruthy();
    expect(result.current.products[1].isLiked).toBeFalsy();
  });
});
