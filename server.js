const express = require("express");
const cors = require("cors");

const app = express();

// importing Routes
const ScoreRouter = require("./src/routes/scoreRoute");
const PrizeRouter = require("./src/routes/prizeRoutes");
const MongoConnection = require("./src/db/MongoConnection");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", ScoreRouter);
app.use("/api", PrizeRouter);
app.use("/", (req, res) => {
  res.send({
    msg: "App runnign",
  });
});

const port = process.env.PORT || 5000;

MongoConnection.connectToAtlas().then(() => {
  app.listen(port, () => {
    try {
      console.log(`Example app listening at http://localhost:${port}`);
    } catch (err) {
      console.error(err);
    }
  });
});
