const Prize = require("../models/Prize");

module.exports = {
  async index(req, res) {
    console.log("Using this route");
    try {
      const business_id = req.params.business_id;
      const retentionPrize = await Prize.find({
        business_id: parseInt(business_id),
        reward_type_id: 1,
      });
      const welcomePrize = await Prize.find({
        business_id: parseInt(business_id),
        reward_type_id: 2,
      });
      //const response = prizes.length === 0 ? {} : prizes;
      res.send({
        data: {
          1: retentionPrize,
          2: welcomePrize,
        },
      });
    } catch (err) {
      console.error(err);
      res.send({
        msg: "Error",
        err: err,
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
