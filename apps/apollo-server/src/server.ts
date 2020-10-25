import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import { ProductService } from './services';

const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
  context: { productService: new ProductService() },
});
app.use('*', cors());

app.use(compression());

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);

httpServer.listen({ port: 4000 }, (): void =>
  console.log(`GraphQL is now running on http://${process.env.APOLLO_SERVER}:4000/graphql`),
);
