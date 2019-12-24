// query resolvers
const Query = require('./queries/Query');
const Snap = require('./queries/Snap');
const User = require('./queries/User');

// mutation resolvers
const Mutation = require('./mutations');

module.exports = {
  Query,
  Snap,
  User,
  Mutation
};
