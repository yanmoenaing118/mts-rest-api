require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const start = async () => {
  try {
    await connectDB(process.env.DB_URI);
    console.log("database connected ");
  } catch (error) {
    console.log(error);
  }
};

start();

app.use(express.json());

const songsRoutes = require("./routes/songs");
const translationRoutes = require("./routes/translation");

app.use("/api/v1/songs", songsRoutes);
app.use("/api/v1/translation", translationRoutes);

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));
