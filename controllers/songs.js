const Song = require("./../models/song");

const getAllSongs = async (req, res, next) => {
  const results = await Song.find();
  res.status(200).json({
    length: results.length,
    songs: results,
  });
};

const getASong = async (req, res, next) => {
  try {
    let song = Song.findById(req.params.id).populate("translations");
    song = await song;
    res.status(200).json({
      song,
    });
  } catch (err) {
    throw new Error(err.messsage);
  }
};

const postASong = async (req, res, next) => {
  try {
    // we need to upload song in production
    const song = await Song.create(req.body);
    res.status(201).json({
      song,
    });
  } catch (err) {
    throw new Error(err.messsage);
  }
};

const updateASong = async (req, res, next) => {
  try {
    const song = await Song.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        artists: req.body.artists,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      song,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  getAllSongs,
  postASong,
  updateASong,
  getASong,
};
