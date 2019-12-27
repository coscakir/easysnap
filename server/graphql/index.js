// query resolvers
const Query = require("./resolvers/queries/Query");
const Snap = require("./resolvers/queries/Snap");
const User = require("./resolvers/queries/User");

// mutation resolvers
const Mutation = require("./resolvers/mutations");

module.exports = {
  Query,
  Snap,
  User,
  Mutation
};
