const { User } = require("../models");
const { wrapAsync, makeError } = require("../utils");
const { BASE_IMAGE_URL, deleteS3Images } = require("../utils/s3");

const getUserInfo = wrapAsync(async (req, res) => {
  const user = await User.findByPk(req.params.userId, {
    attributes: ["nickname", "profile"],
  });

  return res.status(200).json({ user });
});

const patchUserInfo = wrapAsync(async (req, res) => {
  const id = req.params.userId
  const { nickname } = req.body;
  const key = req.file?.key;

  const exUser = await User.findByPk(id);
  if (!exUser) {
    throw makeError("데이터가 존재하지 않습니다.", 400);
  }

  if (key && exUser.profile) {
    const Key = exUser.profile.substring(BASE_IMAGE_URL.length);
    await deleteS3Images([{ Key }]);
  }
  const profile = key ? BASE_IMAGE_URL + key : undefined;

  await User.update({ nickname, profile }, { where: { id }});

  return res.status(200).json({ profile });
});

module.exports = { getUserInfo, patchUserInfo };
