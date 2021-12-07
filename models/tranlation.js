const mongoose = require("mongoose");
const translationSchema = new mongoose.Schema({
  song: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Song",
  },
  lang: {
    type: String,
    required: [true, "A language must be specified for a translation"],
  },
  lyric: [
    {
      text: String,
      start: String,
      end: String,
    },
  ],
});

const translationModel = mongoose.model("Translation", translationSchema);

module.exports = translationModel;
