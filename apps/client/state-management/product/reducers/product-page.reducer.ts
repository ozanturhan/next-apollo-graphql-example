import { Product } from '../../../interfaces/product';
import { CHANGE_FILTER, FILL_PRODUCTS, ProductActions, TOGGLE_PRODUCT_LIKE } from '../actions/product-page.actions';
import { Dispatch, useReducer } from 'react';
import { ProductPageState } from '../states/product-page.state';

export const ProductPageReducer = (state: ProductPageState.IState, action: ProductActions): ProductPageState.IState => {
  switch (action.type) {
    case TOGGLE_PRODUCT_LIKE:
      return {
        ...state,
        products: state.products?.map((item) =>
          item.id === action.payload ? { ...item, isLiked: !item.isLiked } : item,
        ),
      };
    case FILL_PRODUCTS:
      return { ...state, products: action.payload as Product[] };
    case CHANGE_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export function useProductReducer(): { products: Product[]; filter: 'All' | 'Liked'; dispatch: Dispatch<any> } {
  const [state, dispatch] = useReducer(ProductPageReducer, ProductPageState.STATE);

  return { products: state.products as Product[], filter: state.filter, dispatch };
}
