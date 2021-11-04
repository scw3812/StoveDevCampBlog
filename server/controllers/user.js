const { User } = require("../models");
const { wrapAsync } = require("../utils");

const getUserInfo = wrapAsync(async (req, res) => {
  const user = await User.findByPk(req.params.userId, {
    attributes: ["nickname", "profile"],
  });

  return res.status(200).json({ user });
});

module.exports = { getUserInfo };
