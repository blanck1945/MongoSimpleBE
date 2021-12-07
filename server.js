const express = require("express");
const cors = require("cors");

const app = express();

// importing Routes
const ScoreRouter = require("./src/routes/scoreRoute");
const PrizeRouter = require("./src/routes/prizeRoutes");
const tabletRouter = require("./src/routes/tabletRoutes");
const MongoConnection = require("./src/db/MongoConnection");
const apiErrorHandler = require("./src/middlewares/error.middleware");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", ScoreRouter);
app.use("/api", PrizeRouter);
app.use("/api", tabletRouter);
app.use("/", (req, res) => {
  res.send({
    msg: "App runnign",
  });
});
app.use(apiErrorHandler);

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
