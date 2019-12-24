const bcrypt = require('bcrypt');

module.exports = {
  createUser: async (parent, { data: { userName, password } }, { User }) => {
    const user = await User.findOne({
      userName
    });

    if (user) {
      throw new Error('User already exist');
    }

    return await new User({
      userName,
      password
    }).save();
  },

  signIn: async (parent, { data: { userName, password } }, { User }) => {
    const user = await User.findOne({ userName });
    if (!user) {
      throw new Error('User does not exist');
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new Error('Wrong password');
    }

    return { token: 'test token' };
  }
};
