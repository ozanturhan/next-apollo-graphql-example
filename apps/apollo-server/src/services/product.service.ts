import fetch from 'node-fetch';
import { Product } from '../models';
import { fromJS, Map } from 'immutable';

export class ProductService {
  async getAllProducts(): Promise<Product[]> {
    return await fetch('http://localhost:4001/products', { method: 'get' })
      .then((res) => res.json())
      .then((products: Product[]) => {
        const immutable = fromJS(products);
        const result = immutable.map((item: Map<string, boolean>) => item.set('isLiked', false));
        return result.toJS();
      });
  }
}
