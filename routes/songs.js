const express = require("express");
const router = express.Router();

const { getAllSongs } = require("./../controllers/songs");

router.route("/").get(getAllSongs);

module.exports = router;
