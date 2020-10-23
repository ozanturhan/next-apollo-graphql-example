import { Product } from '../../../interfaces/product';

export namespace ProductPageState {
  export interface IState {
    products?: Product[];
    filter: 'All' | 'Liked';
  }

  export const STATE: IState = {
    products: [],
    filter: 'All',
  };
}
