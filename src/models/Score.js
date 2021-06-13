const mongoose = require("mongoose");

const ScoreSchema = mongoose.Schema(
  {
    player: {
      type: String,
      null: false,
      required: true,
    },
    time: {
      type: Number,
      null: false,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["easy", "normal", "hard"],
      required: true,
    },
  },
  {
    dateStamps: true,
    collectionName: "scores",
  }
);

const Score = mongoose.model("Score", ScoreSchema);
module.exports = Score;
