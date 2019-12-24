const bcrypt = require('bcrypt');
const token = require('../../../helpers/token');

module.exports = {
  createUser: async (parent, { data: { userName, password } }, { User }) => {
    const user = await User.findOne({
      userName
    });

    if (user) {
      throw new Error('User already exist');
    }

    const newUser = await new User({
      userName,
      password
    }).save();

    return { token: token.generate(newUser, '1h') };
  },

  signIn: async (parent, { data: { userName, password } }, { User }) => {
    const user = await User.findOne({ userName });
    if (!user) {
      throw new Error('User does not exist');
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error('Wrong password');
    }

    return { token: token.generate(user, '1h') };
  }
};
