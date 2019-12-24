module.exports = {
  createSnap: async (parent, {
    data: {
      text,
      userId
    }
  }, {
    Snap
  }) => {
    return await new Snap({
      text,
      userId
    }).save();
  }
};