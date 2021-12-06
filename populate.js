require("dotenv").config();

const connectDB = require("./db/connect");
const Song = require("./models/song");

const jsonSongs = require("./dev-data.json");

const start = async () => {
  try {
    await connectDB(process.env.DB_URI);
    await Song.deleteMany();
    await Song.create(jsonSongs);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

start();
