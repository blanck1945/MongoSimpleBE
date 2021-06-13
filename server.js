const express = require("express");
const cors = require("cors");

const app = express();

// importing Routes
const ScoreRouter = require("./src/routes/scoreRoute");
const MongoConnection = require("./src/db/MongoConnection");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", ScoreRouter);

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  try {
    await MongoConnection.connectToAtlas();
    console.log(`Example app listening at http://localhost:${port}`);
  } catch (err) {
    console.error(err);
  }
});
