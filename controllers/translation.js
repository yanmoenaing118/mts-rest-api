const Translation = require("./../models/tranlation");
const Song = require("./../models/song");

const getTranslation = async (req, res, next) => {
  try {
    const translation = await Translation.findById(req.params.id);
    res.status(200).json({
      translation,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

const createTranslation = async (req, res, next) => {
  try {
    const translation = await Translation.create(req.body);
    const song = await Song.findById(req.body.song);
    song.translations.push(translation._id);
    await song.save();

    res.status(201).json({
      translation,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateATranslation = async (req, res, next) => {
  try {
    const song = await Song.findById(req.body.song);

    console.log(req.params.id);

    const translation = await Translation.findByIdAndUpdate(
      req.params.id,
      {
        lang: req.body.lang,
        lyric: req.body.lyric,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      translation,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};
module.exports = {
  getTranslation,
  createTranslation,
  updateATranslation,
};
