const http = require('http');
import { ApolloServer, PubSub } from 'apollo-server-express';
import express  from 'express'
import connectDB  from './config/db'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import schemaDirectives from './customDirectives'
const app = express()
app.disable('x-powred-by');
const PORT = 4000;
const pubSub = new PubSub()
const server = new ApolloServer({
      typeDefs,
      resolvers,
      schemaDirectives,
      playground: true,
     context: ( req, res ) => ({ req, res, pubSub })
  });
    connectDB()
    server.applyMiddleware({ app });
    const httpServer = http.createServer(app);
    server.installSubscriptionHandlers(httpServer);
    httpServer.listen(PORT , () => {
      console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
      console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
    })