const express = require("express");
const router = express.Router();

const {
  getAllSongs,
  getASong,
  postASong,
  updateASong,
} = require("./../controllers/songs");

router.route("/").get(getAllSongs).post(postASong);

router.route("/:id").get(getASong).patch(updateASong);

module.exports = router;
