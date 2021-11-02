const { Comment } = require("../models");
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
  await Comment.create({
    user_id: userId,
    post_id: postId,
    content,
  });

  return res.status(201).json({});
});

module.exports = { getComments, postComment };
