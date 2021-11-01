const { deleteS3Images } = require("../utils/s3");
const { Post, Tag } = require("../models");
const { wrapAsync, makeError } = require("../utils");

const IMAGE_BASE_URL = "cloud front 주소";

const postPost = wrapAsync(async (req, res) => {
  const { userId, tags, ...postDatas } = req.body;

  const post = await Post.create({
    user_id: userId,
    ...postDatas,
  });

  const newTags = await Promise.all(
    tags.map((tag) => Tag.findOrCreate({ where: { name: tag } }))
  );
  const postTags = newTags.map((tag) => tag[0]);
  post.addTags(postTags);

  return res.status(201).json({});
});

const getPosts = wrapAsync(async (req, res) => {
  const posts = await Post.findAll({
    where: { user_id: req.params.userId },
    limit: 5,
    offset: (req.params.page - 1) * 5,
    order: [["createdAt", "ASC"]],
  });

  return res.status(201).json({ posts });
});

const getPost = wrapAsync(async (req, res) => {
  const post = await Post.findByPk(req.params.id, {
    attributes: ["title", "description", "content", "createdAt"],
    include: [
      {
        model: Tag,
        as: "tags",
        attributes: [["name", "tag"]],
        through: {
          attributes: [],
        },
      },
    ],
  });
  if (!post) {
    throw makeError("데이터가 존재하지 않습니다.", 400);
  }

  return res.status(200).json({ post });
});

const patchPost = wrapAsync(async (req, res) => {
  const { tags, ...postDatas } = req.body;
  const [success] = await Post.update(postDatas, {
    where: { id: req.params.id },
  });
  if (!success) {
    throw makeError("데이터가 존재하지 않습니다.", 400);
  }

  review.removeTags();
  const newTags = await Promise.all(
    tags.map((tag) => Tag.findOrCreate({ where: { name: tag } }))
  );
  review.addTags(newTags);

  return res.status(200).json({});
});

const deletePost = wrapAsync(async (req, res) => {
  await Post.destroy(req.params.id);

  return res.status(200).json({});
});

const postPostImgae = wrapAsync(async (req, res) => {
  return res.status(200).json({});
});

const deletePostImage = wrapAsync(async (req, res) => {
  const { deleteImages } = req.body;
  const deleteObjects = deleteImages.map((image) => {
    const Key = image.substring(IMAGE_BASE_URL.length);
    return { Key };
  });
  await deleteS3Images(deleteObjects);

  return res.status(200).json({});
});

module.exports = {
  postPost,
  getPosts,
  getPost,
  patchPost,
  deletePost,
  postPostImgae,
  deletePostImage,
};
