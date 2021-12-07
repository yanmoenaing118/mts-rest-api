const express = require("express");
const router = new express.Router();

const {
  getTranslation,
  createTranslation,
  updateATranslation,
} = require("./../controllers/translation");

router.route("/").post(createTranslation);

router.route("/:id").get(getTranslation).patch(updateATranslation);
module.exports = router;
