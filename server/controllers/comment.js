
const { col } = require("sequelize");
const { Comment, User } = require("../models");
const { wrapAsync } = require("../utils");

const getComments = wrapAsync(async (req, res) => {
  const comments = await Comment.findAll({
    where: {
      post_id: req.params.postId,
    },
    attributes: [
      "content",
      "createdAt",
      [col("user.nickname"), "userNickname"],
      [col("user.profile"), "userProfile"],
    ],
    include: [
      {
        model: User,
        as: "user",
        attributes: ["nickname", "profile"],
      },
    ],
    order: [["createdAt", "DESC"]],
  });

  return res.status(200).json({ comments });
});

const postComment = wrapAsync(async (req, res) => {
  const { userId, postId, content } = req.body;
  const comment = await Comment.create({
    user_id: userId,
    post_id: postId,
    content,
  });
  const user = await User.findByPk(comment.user_id, {
    attributes: ["nickname", "profile"]
  });

  return res.status(201).json({ comment, user });
});

module.exports = { getComments, postComment };
