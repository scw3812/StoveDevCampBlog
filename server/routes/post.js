const express = require("express");
const {
  postPost,
  getPosts,
  patchPost,
  deletePost,
  postImage,
  getPostsTags,
} = require("../controllers/post");
const { upload } = require("../utils/s3");

const router = express.Router();

router.post("/", postPost);

router.get("/:userId/:page", getPosts);

router
  .route("/:id")
  .patch(patchPost)
  .delete(deletePost);

router.post("/image", upload.single("postImage"), postImage);

router.get("/tags/users/:userId", getPostsTags);

module.exports = router;
