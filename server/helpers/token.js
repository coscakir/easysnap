const jwt = require('jsonwebtoken');

const token = {
  generate: ({ userName }, expiresIn) => {
    return jwt.sign({ userName }, process.env.SECRET_KEY, { expiresIn });
  }
};

module.exports = token;
