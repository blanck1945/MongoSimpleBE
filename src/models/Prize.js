const mongoose = require("mongoose");

const PrizeSchema = mongoose.Schema(
  {
    bussines_id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reward_type_id: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    dateStamps: true,
    collectionName: "scores",
  }
);

const Prize = mongoose.model("Prize", PrizeSchema);
module.exports = Prize;
