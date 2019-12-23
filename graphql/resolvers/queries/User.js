const User = {
  snaps: async (parent, args, { Snap }) => {
    return await Snap.find({ userId: parent._id });
  }
};

module.exports = User;
