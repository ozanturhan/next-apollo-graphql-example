import { IResolvers } from 'graphql-tools';
import { Product } from './models/product';

const resolvers: IResolvers = {
  Query: {
    products(root, args, ctx): Promise<Product[]> {
      return ctx.productService.getAllProducts();
    },
  },
};
export default resolvers;
