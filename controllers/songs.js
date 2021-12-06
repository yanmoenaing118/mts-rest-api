const Song = require("./../models/song");

const getAllSongs = async (req, res, next) => {
  const results = await Song.find();
  res.status(200).json({
    length: results.length,
    songs: results,
  });
};

module.exports = {
  getAllSongs,
};
