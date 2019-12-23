require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const {
  ApolloServer
} = require('apollo-server-express');
const {
  importSchema
} = require('graphql-import');
const resolvers = require('./graphql/resolvers');

// models
const User = require('./models/User');

const server = new ApolloServer({
  typeDefs: importSchema('./graphql/types/schema.graphql'),
  resolvers,
  context: {
    User
  }
});

// DB Connection
mongoose
  .connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log('Connected to DB'))
  .catch(e => console.log(e));

const app = express();
server.applyMiddleware({
  app
});
app.listen({
  port: 4001
}, () => {
  console.log(`Server ready at http://localhost:4001${server.graphqlPath}`);
});