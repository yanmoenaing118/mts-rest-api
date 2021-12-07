const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A title must be provided"],
  },
  artists: [
    {
      type: String,
    },
  ],
  original_lyric: {
    type: String,
  },
  translations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Translation",
    },
  ],
});

const songModel = mongoose.model("Song", songSchema);
module.exports = songModel;
