import { ApolloServer } from 'apollo-server-express';
import express  from 'express'
import connectDB  from './config/db'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import schemaDirectives from './customDirectives'
const app = express()
app.disable('x-powred-by');

const server = new ApolloServer({
      typeDefs,
      resolvers,
      schemaDirectives,
      playground: true,
    context: ({ req, res }) => ({ req, res })
  });
    connectDB()
    server.applyMiddleware({ app });
    app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)