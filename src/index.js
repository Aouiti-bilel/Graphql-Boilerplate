import { ApolloServer } from 'apollo-server-express';
import express  from 'express'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
const app = express()
app.disable('x-powred-by');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    context: ({ req, res }) => ({ req, res })
  });

  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)