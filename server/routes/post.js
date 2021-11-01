const express = require("express");
const { upload } = require("../utils/s3");
const {
  postPost,
  getPosts,
  getPost,
  patchPost,
  deletePost,
  postPostImgae,
  deletePostImage,
} = require("../controllers/post");

const router = express.Router();

router.post("/", postPost);

router.get("/:userId/:page", getPosts);

router
  .route("/:id")
  .get(getPost)
  .patch(patchPost)
  .delete(deletePost);

router
  .route("/image")
  .post(upload.array("postImage"), postPostImgae)
  .delete(deletePostImage);

module.exports = router;
