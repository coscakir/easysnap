module.exports = {
  createUser: async (parent, { data: { userName, password } }, { User }) => {
    const user = await User.findOne({
      userName
    });

    if (user) {
      throw new Error('User already exist');
    }

    return await new User({ userName, password }).save();
  }
};
