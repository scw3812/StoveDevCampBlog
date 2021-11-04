const express = require("express");
const { getUserInfo } = require("../controllers/user");

const router = express.Router();

router.get("/:userId", getUserInfo);

module.exports = router;
