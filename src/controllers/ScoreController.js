const Score = require("../models/Score");

module.exports = {
  async index(req, res) {
    try {
      const easyResults = await Score.find({
        difficulty: "easy",
      })
        .sort("time")
        .limit(3)
        .exec();
      const normalResults = await Score.find({
        difficulty: "normal",
      })
        .sort("time")
        .limit(3)
        .exec();

      const hardResults = await Score.find({
        difficulty: "hard",
      })
        .sort("time")
        .limit(3)
        .exec();

      res.send({
        easy: easyResults,
        normal: normalResults,
        hard: hardResults,
      });
    } catch (err) {
      console.error(err);
      res.send({
        msg: "Error",
      });
    }
  },

  async create(req, res) {
    try {
      await Score.create(req.body);
      res.send({
        msg: "Score Submitted",
        status: "Added to the DB",
        complete: true,
      });
    } catch (err) {
      console.error(err);
      res.send({
        msg: "Error",
      });
    }
  },
};
