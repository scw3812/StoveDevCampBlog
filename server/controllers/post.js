const { Post, Tag } = require("../models");
const { wrapAsync, makeError } = require("../utils");
const { deleteS3Images, BASE_IMAGE_URL } = require("../utils/s3");
const { parse } = require("node-html-parser");

const postPost = wrapAsync(async (req, res) => {
  const { userId, tags, deleteImages, ...postDatas } = req.body;

  if (deleteImages.length) {
    const deleteObjects = deleteImages.map((image) => {
      const Key = image.substring(BASE_IMAGE_URL.length);
      return { Key };
    });
    await deleteS3Images(deleteObjects);
  }

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
  const user_id = req.params.userId;
  const posts = await Post.findAll({
    where: { user_id },
    include: [
      {
        model: Tag,
        as: "tags",
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
    limit: 5,
    offset: (req.params.page - 1) * 5,
    order: [["createdAt", "DESC"]],
  });

  const postsCount = await Post.count({ where: { user_id } });
  const pages = Math.ceil(postsCount / 5);

  return res.status(200).json({ posts, pages });
});

const patchPost = wrapAsync(async (req, res) => {
  const { tags, deleteImages, ...postDatas } = req.body;
  const id = req.params.id;

  const post = await Post.findByPk(id);
  if (!post) {
    throw makeError("데이터가 존재하지 않습니다.", 400);
  }

  if (deleteImages.length) {
    const deleteObjects = deleteImages.map((image) => {
      const Key = image.substring(BASE_IMAGE_URL.length);
      return { Key };
    });
    await deleteS3Images(deleteObjects);
  }

  await Post.update(postDatas, {
    where: { id },
  });

  const newTags = await Promise.all(
    tags.map((tag) => Tag.findOrCreate({ where: { name: tag } }))
  );
  const postTags = newTags.map((tag) => tag[0]);
  post.setTags(postTags);

  return res.status(200).json({});
});

const deletePost = wrapAsync(async (req, res) => {
  const id = req.params.id;
  const post = await Post.findByPk(id);
  if (!post) {
    throw makeError("데이터가 존재하지 않습니다.", 400);
  }

  await Post.destroy({ where: { id: req.params.id } });

  const root = parse(post.content);
  const imageEls = root.getElementsByTagName("img");
  const images = Array.from(imageEls)
    .filter((image) => image.getAttribute("class") !== "ProseMirror-separator")
    .map((image) => image.getAttribute("src"));
  const deleteObjects = images
    .filter((image) => image.includes(BASE_IMAGE_URL))
    .map((image) => {
      const Key = image.substring(BASE_IMAGE_URL.length);
      return { Key };
    });
  if (deleteObjects.length) {
    await deleteS3Images(deleteObjects);
  }

  return res.status(200).json({});
});

const postImage = (req, res) =>
  res.status(200).json({ url: BASE_IMAGE_URL + req.file.key });

const getPostsTags = wrapAsync(async (req, res) => {
  const posts = await Post.findAll({
    where: { user_id: req.params.userId },
    include: [
      {
        model: Tag,
        as: "tags",
        attributes: ["id", "name"]
      }
    ],
    order: [["createdAt", "DESC"]],
  });
  const tags = posts.reduce((prev, post) => [...prev, ...post.tags.map((tag) => tag.name)], []);
  const newTags = Array.from(new Set(tags));
  const tagPosts = {};
  newTags.forEach((tag) => tagPosts[tag] = []);
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagPosts[tag.name].push(post));
  });

  return res.status(200).json({ tagPosts });
});

module.exports = {
  postPost,
  getPosts,
  patchPost,
  deletePost,
  postImage,
  getPostsTags,
};
