import { Product } from '../../../interfaces/product';

export const FILL_PRODUCTS = 'FILL_PRODUCTS';
export const TOGGLE_PRODUCT_LIKE = 'TOGGLE_PRODUCT_LIKE';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export class FillProductsAction {
  readonly type = FILL_PRODUCTS;
  constructor(public payload: Product[]) {}
}

export class ToggleLikeAction {
  readonly type = TOGGLE_PRODUCT_LIKE;
  constructor(public payload: number) {}
}

export class ChangeFilterAction {
  readonly type = CHANGE_FILTER;
  constructor(public payload: 'All' | 'Liked') {}
}

export type ProductActions = FillProductsAction | ToggleLikeAction | ChangeFilterAction;
