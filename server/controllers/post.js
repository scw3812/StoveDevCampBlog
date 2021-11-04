const { Post, Tag } = require("../models");
const { wrapAsync, makeError } = require("../utils");
const { deleteS3Images } = require("../utils/s3");

const BASE_IMAGE_URL="https://stove-s3-bucket.s3.ap-northeast-2.amazonaws.com/";

const postPost = wrapAsync(async (req, res) => {
  const { userId, tags, deleteImages, ...postDatas } = req.body;

  if (deleteImages.length) {
    const deleteObjects = deleteImages.map((image) => {
      const Key = image.substring(IMAGE_BASE_URL.length);
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
  const posts = await Post.findAll({
    where: { user_id: req.params.userId },
    include: [
      {
        model: Tag,
        as: "tags",
        attributes: ["name"],
        through: {
          attributes: []
        }
      }
    ],
    limit: 5,
    offset: (req.params.page - 1) * 5,
    order: [["createdAt", "DESC"]],
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
  const id = req.params.id;
  const post = await Post.findByPk(id);
  if (!post) {
    throw makeError("데이터가 존재하지 않습니다.", 400);
  }
  
  await Post.destroy(req.params.id);

  const el = document.createElement('html');
  el.innerHTML =   post.content;
  const imageEls = el.getElementsByTagName('img');
  const images = 
    Array.from(imageEls).filter(image => image.className !== "ProseMirror-separator").map(image => image.src);
  const deleteObjects = images.map((image) => {
    if (!image.includes(IMAGE_BASE_URL)) {
      return;
    }
    const Key = image.substring(IMAGE_BASE_URL.length);
    return { Key };
  });
  await deleteS3Images(deleteObjects);

  return res.status(200).json({});
});

const postImage = (req, res) => res.status(200).json({ url: BASE_IMAGE_URL + req.file.key });

module.exports = {
  postPost,
  getPosts,
  getPost,
  patchPost,
  deletePost,
  postImage,
};
