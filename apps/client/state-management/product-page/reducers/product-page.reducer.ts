import { Product } from '../../../interfaces/product';
import {
  CHANGE_FILTER,
  ChangeFilterAction,
  FILL_PRODUCTS,
  FillProductsAction,
  ProductActions,
  TOGGLE_PRODUCT_LIKE,
} from '../actions/product-page.actions';
import { Dispatch, useEffect, useReducer } from 'react';
import { ProductPageState } from '../states/product-page.state';
import { useQuery } from '@apollo/client';
import { PRODUCTS_QUERY } from '@queries';

const FILTER_MAP = {
  All: () => true,
  Liked: (item) => item.isLiked,
};

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

export function useProductPageReducer(): {
  products: Product[];
  filter: 'All' | 'Liked';
  dispatch: Dispatch<any>;
  likeCount?: number;
  handleFilter: (value: any) => void;
} {
  const { data } = useQuery(PRODUCTS_QUERY);
  const [{ products, filter }, dispatch] = useReducer(ProductPageReducer, ProductPageState.STATE);

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

  const productList = products || data?.products;
  const likeCount = productList?.filter((item) => item.isLiked)?.length;

  return {
    products: productList?.filter(FILTER_MAP[filter]) as Product[],
    likeCount,
    filter: filter,
    dispatch,
    handleFilter,
  };
}
