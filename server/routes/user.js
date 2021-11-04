const express = require("express");
const { getUserInfo, patchUserInfo } = require("../controllers/user");
const { upload } = require("../utils/s3");

const router = express.Router();

router
  .route("/:userId")
  .get(getUserInfo)
  .patch(upload.single("userProfile"), patchUserInfo);

module.exports = router;
