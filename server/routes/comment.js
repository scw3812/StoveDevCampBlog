const express = require("express");
const { getComments, postComment } = require("../controllers/comment");

const router = express.Router();

router.get("/:postId", getComments);

router.post("/", postComment);

module.exports = router;
