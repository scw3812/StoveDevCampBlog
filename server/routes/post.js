const express = require("express");
const {
  postPost,
  getPosts,
  getPost,
  patchPost,
  deletePost,
  postImage
} = require("../controllers/post");
const { upload } = require("../utils/s3");

const router = express.Router();

router.post("/", postPost);

router.get("/:userId/:page", getPosts);

router
  .route("/:id")
  .get(getPost)
  .patch(upload.array("postImage"), patchPost)
  .delete(deletePost);

router.post("/image", upload.single("postImage"), postImage);

module.exports = router;
